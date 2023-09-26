import { ReactComponent as PlusIcon } from 'static/images/plus-icon.svg';
import { ReactComponent as CameraIcon } from 'static/images/camera-icon.svg';
import { ReactComponent as PicIcon } from 'static/images/pic-icon.svg';
import { ReactComponent as MicIcon } from 'static/images/mic-icon.svg';
import styled from 'styled-components';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';

const ChatRoomFooter = () => {
  return (
    <ChatRoomFooterContainer>
      <LeftSideButton children={<PlusIcon />} />
      <LeftSideButton children={<CameraIcon />} />
      <LeftSideButton children={<PicIcon />} />
      <ChatInput />
      <SendButton children={<MicIcon />} />
    </ChatRoomFooterContainer>
  );
};

const ChatRoomFooterContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  background-color: white;
  height: 56px;
  width: 100%;
  padding: 6px 8px 14px 11px;
`;

const LeftSideButton = styled(ButtonWithIcon)`
  margin-right: 8px;
`;

const SendButton = styled(ButtonWithIcon)`
  margin-left: 8px;
`;

const ChatInput = styled.input`
  height: 36px;
  border: none;
  border-radius: 16px;
  background: #f5f5f5;
  padding: 0 8px;
  flex: 1;
`;

export default ChatRoomFooter;
