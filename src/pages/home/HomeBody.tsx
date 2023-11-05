import FriendListElement from 'pages/home/FriendListElement';
import styled from 'styled-components';
import { useUserStore } from 'stores/userStore';
import { getSearchedUsers } from 'utils';

interface HomeBodyProps {
  query: string;
}

const HomeBody = ({ query }: HomeBodyProps) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const users = getSearchedUsers(user.id, query);

  return (
    <HomeBodyContainer>
      <div className="title-outer">
        <div className="title">Friends</div>
        <div className="friend-number">{users.length}</div>
      </div>
      <div className="friend-list">
        {users.map((e) => (
          <FriendListElement
            key={`${e.id}${e.statusMessage}`}
            user={e}
            handleDoubleClickUser={() => {
              setUser(e);
            }}
          />
        ))}
      </div>
    </HomeBodyContainer>
  );
};

const HomeBodyContainer = styled.div`
  margin-top: 17px;
  padding: 0 12px 80px 12px;
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
