import { useRecoilValue } from "recoil";
import { ChatBubbleContainer, ChatBubbleHoverContent } from "./index.element";
import { SetStateAction, useState } from "react";
import { talkState } from "@/states";

interface IChatBubbleProps {
  from: 1 | 2;
  text: string;
  time: string;
  liked: boolean;
  setLiked: any;
}

const ChatBubble = ({
  from,
  text,
  time,
  liked,
  setLiked,
}: IChatBubbleProps) => {
  const talker = useRecoilValue(talkState);
  const [isHovered, setIsHovered] = useState(false);

  const handleClickBubble = (e: React.MouseEvent<HTMLDivElement>) => {
    if (from === 2) {
      if (e.detail >= 2) {
        setLiked();
      } else {
        setIsHovered(true);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ChatBubbleContainer
        from={from === 1 ? "me" : "partner"}
        liked={liked}
        onClick={(e) => handleClickBubble(e)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </ChatBubbleContainer>
      {!liked && isHovered && (
        <ChatBubbleHoverContent>Double click to ❤️</ChatBubbleHoverContent>
      )}
    </div>
  );
};

export default ChatBubble;
