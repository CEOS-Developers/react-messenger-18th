//style
import styled from "styled-components";
//component
import { useRecoilValue } from "recoil";
import { friendsState } from "../../recoil/state";
import ProfileCard from "./ProfileCard";
interface ProfileListProps {
  favorite: boolean;
}
const ProfileList: React.FC<ProfileListProps> = ({ favorite }) => {
  const userList = useRecoilValue(friendsState);
  if (favorite === false) {
    return (
      <ProfileListWrapper>
        {userList.map((value, index) => {
          return <ProfileCard userIndex={index} favorite={favorite} />;
        })}
      </ProfileListWrapper>
    );
  } else {
    return (
      <ProfileListWrapper>
        {userList.map((value, index) =>
          value.favorite === 1 ? (
            <ProfileCard userIndex={index} favorite={favorite} />
          ) : null
        )}
      </ProfileListWrapper>
    );
  }
};
export default ProfileList;

const ProfileListWrapper = styled.div`
  height: 35.8745rem;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari*/
  }
  overflow-x: hidden;
`;
//즐겨찾기 버튼 좌우 스크롤 방지
