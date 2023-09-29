import React from 'react';

// 채팅 박스의 입력 프로퍼티를 정의하는 인터페이스
interface ChatBoxProps {
  text: string;
  color: 'purple' | 'green'; // 색상은 'blue' 또는 'green'만 허용
  hasTail: boolean;
}

// ChatBoxProps를 사용하여 채팅 박스 컴포넌트를 정의
const ChatBox: React.FC<ChatBoxProps> = ({ text, color, hasTail }) => {
  return (
    <div style={{ position: 'relative' }}>
      {hasTail && <div></div>}
      <div>{text}</div>
    </div>
  );
};

export default ChatBox;
