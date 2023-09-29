import { styled } from "styled-components";
import { useEffect } from "react";

const TopInChat: React.FC<{
  user: { [key: string]: { id: number; name: string } };
}> = ({ user }) => {
  useEffect(() => {
    console.log("First User ID:", user.first_user.id);
  }, []);

  return (
    <Wrapper>
      <ArrowBackImage src={"/img/arrow_back.png"} alt="arrow_back" />
      <UserName>{user.first_user.name} </UserName>
      <RightItems>
        <Search src={"/img/search.png"} alt="search" />
        <Menu src={"/img/menu.png"} alt="menu" />
      </RightItems>
    </Wrapper>
  );
};
export default TopInChat;

const Wrapper = styled.div`
  position: fixed;
  margin: 12px;
  margin-left: 16px;
  margin-right: 16px;
  top: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ArrowBackImage = styled.img`
  margin: 4px;
`;

const UserName = styled.div`
  margin: 8px;
  padding-right: 180px;
  width: 47px;
  font-weight: 600;
`;

const Search = styled.img`
  margin: 4px;
`;
const Menu = styled.img`
  margin: 4px;
`;
