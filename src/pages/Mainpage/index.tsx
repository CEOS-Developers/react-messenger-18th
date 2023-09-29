import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

import ChatBubble from "@/components/ChatBubble";
import { IChatData } from "@/interfaces";
import { chatToggleState, talkState } from "@/states";
import DummyChatData from "@/assets/datas/chatData.json";
import alienSrc from "@/assets/images/alien.png";
import { ChatLineWrapper, ChatTime, MainpageContainer } from "./index.element";

const Mainpage = () => {
  const [chatData, setChatData] = useState(DummyChatData);
  const talker = useRecoilValue(talkState);
  const mainpageRef = useRef<HTMLDivElement>(null);
  const [chatRefresh, setChatRefresh] = useRecoilState(chatToggleState);
  const { chatId } = useParams();
  const [chatLength, setChatLength] = useState(0);

  const setLocalStorage = () => {
    if (localStorage.getItem(`chatData_${chatId}`) === null) {
      localStorage.setItem(
        `chatData_${chatId}`,
        JSON.stringify(
          chatData.find((el) => el.id === Number(chatId))?.chatData
        )
      );
    } else {
      localStorage.removeItem(`chatData_${chatId}`);
      localStorage.setItem(
        `chatData_${chatId}`,
        JSON.stringify(
          chatData.find((el) => el.id === Number(chatId))?.chatData
        )
      );
    }
  };

  const handleLike = (id: string) => {
    let target = chatData
      .find((el) => el.id === Number(chatId))
      ?.chatData.find((el) => el.createdAt === id)!;
    target.like = true;
    setChatData(
      chatData.map((el) => {
        if (el.id === Number(chatId)) {
          return {
            ...el,
            chatData: el.chatData.map((el) => {
              if (el.createdAt === id) {
                return target;
              } else {
                return el;
              }
            }),
          };
        } else {
          return el;
        }
      })
    );
    setLocalStorage();
  };

  // chatData 길이가 바뀔 때마다 스크롤을 맨 아래로 내림
  useEffect(() => {
    // 이유는 모르겠는데, setTimeout에 넣어야 scrollHeight가 제대로 작동함
    const scrollTimeout = setTimeout(() => {
      mainpageRef.current?.scrollTo(0, mainpageRef.current.scrollHeight);
    }, 0);
    return () => clearTimeout(scrollTimeout);
  }, [chatRefresh]);

  useEffect(() => {
    if (chatId !== undefined) {
      if (localStorage.getItem(`chatData_${chatId}`) === null) {
        setLocalStorage();
      } else {
        setChatData(
          chatData.map((el) => {
            if (el.id === Number(chatId)) {
              return {
                ...el,
                chatData: JSON.parse(
                  localStorage.getItem(`chatData_${chatId}`)!
                ),
              };
            } else {
              return el;
            }
          })
        );
      }
      setChatRefresh(false);
    }
  }, [chatRefresh]);

  return (
    <MainpageContainer ref={mainpageRef}>
      {chatData &&
        chatData
          .find((el) => el.id === Number(chatId))!
          .chatData.map((chat) => {
            // Type Assertion
            const assertedChat = chat as IChatData;
            return (
              <div key={assertedChat.createdAt}>
                <ChatTime>
                  {moment(chat.createdAt).format("MMM DD, YYYY, h:mm A")}
                </ChatTime>
                <ChatLineWrapper from={assertedChat.from === talker ? 1 : 2}>
                  {assertedChat.from === 2 && talker === 1 && (
                    <span>
                      <img
                        src={require(`../../assets/images/${chatData[0].partner.imgSrc}`)}
                        alt="partner profile"
                      />
                    </span>
                  )}
                  {assertedChat.from === 1 && talker === 2 && (
                    <span>
                      <img
                        src={alienSrc}
                        alt="my profile"
                      />
                    </span>
                  )}
                  <ChatBubble
                    from={assertedChat.from === talker ? 1 : 2}
                    text={assertedChat.content}
                    time={assertedChat.createdAt}
                    liked={assertedChat.like}
                    setLiked={() => handleLike(assertedChat.createdAt)}
                  />
                </ChatLineWrapper>
              </div>
            );
          })}
    </MainpageContainer>
  );
};
export default Mainpage;
