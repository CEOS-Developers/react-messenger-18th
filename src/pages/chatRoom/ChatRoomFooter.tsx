// import { ReactComponent as MoreIcon } from 'static/images/back-arrow-icon.svg';
import { ReactComponent as PlusIcon } from 'static/images/plus-icon.svg';
import { ReactComponent as CameraIcon } from 'static/images/camera-icon.svg';
import { ReactComponent as PicIcon } from 'static/images/pic-icon.svg';
import { ReactComponent as MicIcon } from 'static/images/mic-icon.svg';
// import { ReactComponent as SendIocn } from 'static/images/send-icon.svg';
import styled from 'styled-components';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';

const ChatRoomFooter = () => {
  return (
    <ChatRoomFooterContainer>
      <ButtonWithIcon children={<PlusIcon />} className="leftside-buttons" />
      <ButtonWithIcon children={<CameraIcon />} className="leftside-buttons" />
      <ButtonWithIcon children={<PicIcon />} className="leftside-buttons" />
      <ChatInput />
      <ButtonWithIcon children={<MicIcon />} className="send-button" />
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
  .leftside-buttons {
    margin-right: 8px;
  }
  .send-button {
    margin-left: 8px;
  }
`;

const ChatInput = styled.input`
  height: 36px;
  border: none;
  border-radius: 16px;
  background: #f5f5f5;
  flex: 1;
`;

export default ChatRoomFooter;
