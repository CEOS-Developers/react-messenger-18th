import FriendListElement from 'pages/home/FriendListElement';
import styled from 'styled-components';

const HomeBody = () => {
  return (
    <HomeBodyContainer>
      <div className="title-outer">
        <div className="title">Friends</div>
        <div className="friend-number">15</div>
      </div>
      <div className="friend-list">
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
        <FriendListElement />
      </div>
    </HomeBodyContainer>
  );
};

const HomeBodyContainer = styled.div`
  margin-top: 17px;
  padding: 0 12px;
  .title-outer {
    display: flex;
    margin-bottom: 4px;
    .title {
      height: 22px;
      font-size: 14px;
      line-height: 160%;
      margin-right: 8px;
    }
    .friend-number {
      height: 22px;
      font-size: 14px;
      font-weight: 600;
      line-height: 160%; /* 22.4px */
    }
  }
`;

export default HomeBody;
