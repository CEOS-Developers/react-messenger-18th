//style
import styled from "styled-components";
import { ReactComponent as GreenDot } from "../../assets/icons/GreenDot.svg";
import { Body1, Heading1 } from "../../style/font";
//component
import { useRecoilState } from "recoil";
import { greenDotState } from "../../recoil/state";
interface ProfileHeaderProps {
  favorite: boolean;
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  favorite,
  setFavorite,
}) => {
  const [greenDot, setGreenDot] = useRecoilState(greenDotState);
  const favoriteToggle = () => {
    if (greenDot === true) {
      setGreenDot(false);
    }
    setFavorite(true);
  };
  const allToggle = () => {
    setFavorite(false);
  };
  return (
    <ProfileHeaderWrapper>
      <ProfileLogoWrapper>
        <Heading1 className="chat-logo" color=" var(--gray-7)">
          친구
        </Heading1>
      </ProfileLogoWrapper>
      <ProfileNav>
        <NavAll favorite={favorite} onClick={allToggle}>
          {favorite ? (
            <Body1 color="var(--gray-3)">전체</Body1>
          ) : (
            <Body1 color="var(--green)">전체</Body1>
          )}
        </NavAll>
        <NavFavorite favorite={favorite} onClick={favoriteToggle}>
          {favorite ? (
            <Body1 color="var(--green)">즐겨찾기</Body1>
          ) : (
            <Body1 color="var(--gray-3)">즐겨찾기</Body1>
          )}
          {greenDot ? <GreenDotIcon /> : null}
        </NavFavorite>
      </ProfileNav>
    </ProfileHeaderWrapper>
  );
};
export default ProfileHeader;
const ProfileHeaderWrapper = styled.div`
  height: 6.9375rem;
  display: flex;
  flex-direction: column;
`;
const ProfileLogoWrapper = styled.div`
  height: 4.3125rem;
  display: flex;
  align-items: center;
  .chat-logo {
    padding-left: 1.25rem;
  }
`;
const ProfileNav = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1.34rem;
  height: 2.5625rem;
  border-bottom: solid 0.0625rem var(--gray-3);
`;
const NavAll = styled.div<{ favorite: boolean }>`
  width: 2.75rem;
  height: 2.5625rem;
  border-bottom: solid 0.0625rem
    ${(props) => (props.favorite ? "var(--gray-3)" : "var(--green)")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const NavFavorite = styled.div<{ favorite: boolean }>`
  width: 4.75rem;
  height: 2.5625rem;
  border-bottom: solid 0.0625rem
    ${(props) => (props.favorite ? "var(--green)" : "var(--gray-3)")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;
const GreenDotIcon = styled(GreenDot)`
  position: absolute;
  top: 0.75rem;
  right: 0.1rem;
`;
