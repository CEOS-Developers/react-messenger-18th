import { useEffect, useRef, useState } from "react";

import { BottomFloaterContainer } from "./index.element";

import srcGif from "@/assets/images/gif.svg";
import srcCamera from "@/assets/images/camera.svg";
import srcPic from "@/assets/images/pic.svg";
import srcMic from "@/assets/images/mic.svg";
import srcSmile from "@/assets/images/smile.svg";
import srcThumbup from "@/assets/images/thumbup.svg";

import useOutSideClick from "@/hooks/useOutSideClick";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatToggleState, talkState } from "@/states";
import { useLocation } from "react-router-dom";

const ChatBottomFloater = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputClicked, setInputClicked] = useState(false);
  const talker = useRecoilValue(talkState);
  const { pathname } = useLocation();
  const setChatRefresh = useSetRecoilState(chatToggleState);

  useOutSideClick(inputRef, () => setInputClicked(false), inputClicked);

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    const chatId = pathname.split("/")[2];

    if (chatId !== undefined) {
      if (e.key === "Enter" && e.currentTarget.value) {
        let newChatData = {
          from: talker,
          like: false,
          content: e.currentTarget.value,
          createdAt: new Date().toISOString(),
        };

        let curChatData = JSON.parse(
          localStorage.getItem(`chatData_${chatId}`)!
        );

        curChatData.push(newChatData);
        localStorage.setItem(`chatData_${chatId}`, JSON.stringify(curChatData));
        e.currentTarget.value = "";
        setChatRefresh(true);
      }
    }
  };

  return (
    <BottomFloaterContainer>
      {!inputClicked && (
        <>
          <img
            src={srcGif}
            alt="gif"
          />
          <img
            src={srcCamera}
            alt="camera"
          />
          <img
            src={srcPic}
            alt="pic"
          />
        </>
      )}
      <img
        src={srcMic}
        alt="mic"
      />
      <span onClick={() => setInputClicked(true)}>
        <input
          ref={inputRef}
          type="text"
          placeholder={inputClicked ? "Type a message..." : ""}
          onKeyDown={(e) => handleInputChange(e)}
        />
        <img
          src={srcSmile}
          alt="smile"
        />
      </span>
      <img
        src={srcThumbup}
        alt="thumbup"
      />
    </BottomFloaterContainer>
  );
};

export default ChatBottomFloater;
