import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { TChatRoomInfo } from 'types';
import { useNavigate } from 'react-router-dom';
import { convertTimeFormatForChatRoom } from 'utils';

interface ChatListElementProps {
  chatRoomInfo: TChatRoomInfo;
}
const ChatListElement = ({ chatRoomInfo }: ChatListElementProps) => {
  const navigate = useNavigate();

  return (
    <ChatListElementContainer
      onClick={() => {
        navigate(`./${chatRoomInfo.id}`);
      }}
    >
      <ProfileImageConatiner>
        {chatRoomInfo.profileImage ? (
          <img src={chatRoomInfo.profileImage} alt="profile" />
        ) : (
          <DefaultProfileIcon />
        )}
      </ProfileImageConatiner>
      <ChatRoomInfo>
        <div className="username">{chatRoomInfo.userName}</div>
        <div className="thumb-message">{chatRoomInfo.message}</div>
      </ChatRoomInfo>
      <ChatRoomDate>
        {convertTimeFormatForChatRoom(chatRoomInfo.time)}
      </ChatRoomDate>
    </ChatListElementContainer>
  );
};

const ChatListElementContainer = styled.button`
  text-align: start;
  width: 100%;
  // height: 56px;
  padding: 6px 20px 6px 14.4px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const ProfileImageConatiner = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 14.6px;
  img,
  svg {
    width: 44px;
  }
`;

const ChatRoomInfo = styled.div`
  // padding-top: 3px;
  flex: 1;
  .username {
    height: 19px;
    color: var(--Gray-3);
    font-size: 14px;
    font-weight: 600;
    line-height: 160%;
    margin-bottom: 4px;
  }
  .thumb-message {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: var(--Gray-2);
    font-size: 14px;
    font-weight: 400;
    // line-height: 160%;
  }
`;

const ChatRoomDate = styled.div`
  align-self: start;
  padding-top: 4px;
  margin-right: 4px;
  color: var(--Gray-2);
  font-size: 12px;
  font-weight: 300;
  line-height: 120%;
  white-space: nowrap;
`;

export default ChatListElement;
