import { styled } from "styled-components";

interface FriendItemProps {
  name: string;
}

const FriendItem: React.FC<FriendItemProps> = ({ name }) => {
  return (
    <FriendWrapper>
      <FriendImg src={"/assets/profile.svg"} alt="profile" />
      <FriendName>{name}</FriendName>
    </FriendWrapper>
  );
};

export default FriendItem;

const FriendWrapper = styled.div`
  display: flex;
  padding: 12px 16px;
  gap: 10px;
  align-items: center;
`;

const FriendImg = styled.img`
  width: 40px;
  height: 40px;
`;

const FriendName = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 135%;
  color: #33333a;
`;
