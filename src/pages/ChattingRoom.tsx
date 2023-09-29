import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import TopContainer from "../components/TopContainer";
import ChatInput from "../components/ChatInput";

function ChattingRoom() {
  return (
    <div>
      <TopContainer />
      <ChatInput />
    </div>
  );
}

export default ChattingRoom;
