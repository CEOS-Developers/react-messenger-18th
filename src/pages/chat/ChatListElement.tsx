import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';

const ChatListElement = () => {
  return (
    <ChatListElementContainer>
      <ProfileImageConatiner>
        <DefaultProfileIcon />
        {/* <img
          src="https://todayslunch-bucket.s3.ap-northeast-2.amazonaws.com/judge_restaurant/2023/09/06/32d24779-cdb9-4c2e-a203-f2d66b009196_blob"
          alt=""
        /> */}
      </ProfileImageConatiner>
      <ChatRoomInfo>
        <div className="username">배수연</div>
        <div className="thumb-message">날 집에 보내줘</div>
      </ChatRoomInfo>
      <ChatRoomDate>8/31</ChatRoomDate>
    </ChatListElementContainer>
  );
};

const ChatListElementContainer = styled.button`
  text-align: start;
  width: 100%;
  height: 56px;
  padding: 6px 20px 6px 14.4px;
  margin-bottom: 8px;
  display: flex;
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
    height: 44px;
  }
`;

const ChatRoomInfo = styled.div`
  padding-top: 3px;
  flex-grow: 1;
  .username {
    height: 19px;
    color: var(--Gray-3);
    font-size: 14px;
    font-weight: 600;
    line-height: 160%;
    margin-bottom: 2px;
  }
  .thumb-message {
    height: 21px;
    color: var(--Gray-2);
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }
`;

const ChatRoomDate = styled.div`
  padding-top: 4px;
  color: var(--Gray-2);
  font-size: 12px;
  font-weight: 300;
  line-height: 120%;
`;

export default ChatListElement;
