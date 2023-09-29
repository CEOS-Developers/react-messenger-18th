import React from "react";
import ChatBubbleBlue from "../components/moleclues/ChatBubbleBlue";
import ChatBubbleWhite from "../components/moleclues/ChatBubbleWhite";

function DummyList() {
  return (
    <>
      <ChatBubbleBlue text="짧메" time="15:02 pm" />
      <ChatBubbleWhite
        text="공백없는긴메시지공백없는긴메시지공백없는긴메시지공백없는긴메시지공백없는긴메시지공백없는긴메시지공백없는긴메시지공백없는긴메시지공백없는긴메시지"
        time="15:05 pm"
      />
      <ChatBubbleBlue
        text="공백이 있는 긴메시지 출력은 이렇습니다 공백이 있는 긴메시지 출력은 이렇습니다 공백이 있는 긴메시지 출력은 이렇습니다 공백이 있는 긴메시지 출력은 이렇습니다"
        time="16:02 pm"
      />
      <ChatBubbleWhite
        text="englishInput englishInput englishInput englishInput englishInput englishInput"
        time="16:06 pm"
      />
    </>
  );
}

export default DummyList;
