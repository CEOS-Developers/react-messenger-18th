import FriendListElement from 'pages/home/FriendListElement';
import styled from 'styled-components';
import userData from 'data/userData.json';
import { useUserStore } from 'stores/userStore';

const HomeBody = () => {
  const user = useUserStore((state) => state.user);
  const storedUserData = userData.data.filter((e) => e.id !== user.id);
  for (let i = 0; i < storedUserData.length; i += 1) {
    const data = localStorage.getItem(`user_${storedUserData[i].id}`);
    if (data) {
      storedUserData[i] = JSON.parse(data);
    }
  }

  // 사전순 정렬
  storedUserData.sort((a, b) => {
    if (a.name < b.name) return -1;
    else return 1;
  });

  return (
    <HomeBodyContainer>
      <div className="title-outer">
        <div className="title">Friends</div>
        <div className="friend-number">{storedUserData.length}</div>
      </div>
      <div className="friend-list">
        {storedUserData.map((e) => (
          <FriendListElement key={`${e.id}${e.statusMessage}`} user={e} />
        ))}
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
