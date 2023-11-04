import React, { useRef, useEffect } from "react";
import styled from "styled-components";

interface MessageListProps {
  children: React.ReactNode;
}

//메시지 리스트 스크롤 관리

const MessageList: React.FC<MessageListProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 현재 스크롤 위치 :scrollRef.current.scrollTop
    // 스크롤 길이 : scrollRef.current.scrollHeight
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <MessageListContainer ref={scrollRef}>{children}</MessageListContainer>
  );
};

const MessageListContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: 100%;
  flex: 1;
  scrollbar-width: none;
`;

export default MessageList;
