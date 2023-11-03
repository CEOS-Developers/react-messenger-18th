import ChattingRoom from "../components/chatting/ChattingRoom";
import ChattingInput from "../components/chatting/ChattingInput";
import ChattingProfile from "../components/chatting/ChattingProfile";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  chatListByIdState,
  chatRoomListState,
  nowUserIdState,
} from "../recoil/state";
import { useParams } from "react-router-dom";
import HomeIndicator from "../components/HomeIndicator";

function ChattingPage() {
  //id받아서 해당 id에 해당하는 chat 찾기
  let { id } = useParams();
  //chatting 전체 리스트
  const chatRoomList = useRecoilValue(chatRoomListState);
  //해당 채팅방 chatting list
  const [chatListById, setChatListById] = useRecoilState(
    chatListByIdState(Number(id))
  );
  //채팅방 사용자 2명
  const roomUsers = chatRoomList[Number(id)].userList;
  //상대방 user
  const [targetUserId, setTargetUserId] = useState(roomUsers[1]);
  //user switch 상태
  const [switchUser, setSwitchUser] = useState(0);
  //현재 사용중인 user의 id(login user 아님)
  const setNowUserId = useSetRecoilState(nowUserIdState);
  //localstorage에 없으면 json 파일 저장, 있으면 chatList 불러옴
  const initializeChat = localStorage.getItem("chat" + String(Number(id)));
  useEffect(() => {
    if (initializeChat === null) {
      localStorage.setItem(
        "chat" + String(Number(id)),
        JSON.stringify(chatListById)
      );
    } else {
      setChatListById(JSON.parse(initializeChat));
    }
    //페이지가 불릴 때, 현재 user도 재설정
    setNowUserId(roomUsers[0]);
    setTargetUserId(roomUsers[1]);
  }, []);
  const handleUserSwitch = () => {
    if (switchUser === 0) {
      setTargetUserId(roomUsers[0]);
      setNowUserId(roomUsers[1]);
      setSwitchUser(1);
    } else if (switchUser === 1) {
      setTargetUserId(roomUsers[1]);
      setNowUserId(roomUsers[0]);
      setSwitchUser(0);
    }
  };
  return (
    <div className="pageWrapper">
      {/* <div onClick={handleUserSwitch}> */}
      <ChattingProfile
        targetId={targetUserId}
        onUserSwitch={handleUserSwitch}
      />
      {/* </div> */}
      <Divider />
      <ChattingRoom chatRoomId={Number(id)} />
      <ChattingInput chatRoomId={Number(id)} />
      <HomeIndicator color="var(--black)" />
    </div>
  );
}
const Divider = styled.hr`
  background-color = var(--black);
  border : none;
  border-bottom: solid 0.0625rem var(--gray-3);
  margin-top: 0.25rem;
  margin-bottom :0rem;
`;
export default ChattingPage;
