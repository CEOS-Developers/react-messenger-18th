import React from "react";
import styled from "styled-components";
import Profile from "../profile/Profile";
import Bubble from "./Bubble";
import { ChatRoomData } from "../../utils/accessStorage/getChatRoomData";

export interface ChatWrapperProps {
  img?: string;
  name?: string;
  chatText: string;
  file?: string;
  doubleClicked: boolean;
  time: string | null;
  isUser: boolean;
  index?: number;
  chatData?: ChatRoomData[] | [];
  setChatData?: React.Dispatch<React.SetStateAction<ChatRoomData[] | []>>;
  setShouldScrollToBottom?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatWrapper({
  img,
  name,
  chatText,
  file,
  doubleClicked,
  time,
  isUser,
  index,
  chatData,
  setChatData,
  setShouldScrollToBottom,
}: ChatWrapperProps) {
  return (
    <Wrapper $isUser={isUser}>
      {img ? (
        <Profile $img={img} $size="3.2rem" $addClass="margin-right:0.8rem;" />
      ) : null}
      <div>
        {name ? (
          <ChatterName>
            <span>{name}</span>
          </ChatterName>
        ) : null}
        <Bubble
          chatText={chatText}
          file={file}
          doubleClicked={doubleClicked}
          time={time}
          isUser={isUser}
          index={index}
          chatData={chatData}
          setChatData={setChatData}
          setShouldScrollToBottom={setShouldScrollToBottom}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : null)};
`;

const ChatterName = styled.div`
  span {
    ${(props) => props.theme.fontStyles.body1}
  }
`;

export default React.memo(ChatWrapper);
