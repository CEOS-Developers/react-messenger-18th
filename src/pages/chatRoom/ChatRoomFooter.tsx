import { useRef, useState } from 'react';
import styled from 'styled-components';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { ReactComponent as PlusIcon } from 'static/images/plus-icon.svg';
import { ReactComponent as CameraIcon } from 'static/images/camera-icon.svg';
import { ReactComponent as PicIcon } from 'static/images/pic-icon.svg';
import { ReactComponent as MicIcon } from 'static/images/mic-icon.svg';
import { ReactComponent as SendIcon } from 'static/images/send-icon.svg';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';

const ChatRoomFooter = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState<string>('');
  const [isMenuSpread, setIsMenuSpread] = useState<boolean>(true);

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = '36px';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <ChatRoomFooterContainer>
      <LeftSideButtonsOuter $isMenuSpread={isMenuSpread}>
        <LeftSideButton
          children={isMenuSpread ? <PlusIcon /> : <BackIcon />}
          handleOnClickButton={() => {
            setIsMenuSpread(true);
            inputRef.current?.blur();
          }}
        />
        <LeftSideButton children={<CameraIcon />} />
        <LeftSideButton children={<PicIcon />} />
      </LeftSideButtonsOuter>

      <ChatInput
        ref={inputRef}
        onChange={handleChangeContent}
        onFocus={() => {
          setIsMenuSpread(false);
        }}
        onBlur={() => {
          setIsMenuSpread(true);
        }}
        value={content}
      />
      <RightSideButton
        children={content ? <SendIcon /> : <MicIcon />}
        handleOnClickButton={() => {
          setContent('');
          if (inputRef.current) inputRef.current.style.height = '36px';
        }}
      />
    </ChatRoomFooterContainer>
  );
};

const ChatRoomFooterContainer = styled.div`
  display: flex;
  align-items: end;
  background-color: white;
  width: 100%;
  padding: 6px 8px 14px 11px;
`;

const LeftSideButtonsOuter = styled.div<{ $isMenuSpread: boolean }>`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  width: ${(props) => (props.$isMenuSpread ? '108px' : '36px')};
  display: flex;
  overflow: hidden;
`;

const LeftSideButton = styled(ButtonWithIcon)`
  height: 28px;
  width: 28px;
  margin-bottom: 8px;
  margin-right: 8px;
`;

const RightSideButton = styled(ButtonWithIcon)`
  height: 28px;
  width: 28px;
  margin: 0 0 8px 8px;
`;

const ChatInput = styled.textarea.attrs({
  rows: 1,
})`
  max-height: 86px;
  border: none;
  border-radius: 16px;
  background: #f5f5f5;
  padding: 9px 8px;
  flex: 1;
  resize: none;
  font-size: 14px;
  font-family: 'Pretendard Variable';
`;

export default ChatRoomFooter;
