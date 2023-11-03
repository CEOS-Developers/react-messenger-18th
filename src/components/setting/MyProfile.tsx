//style
import styled from "styled-components";
import { ReactComponent as People } from "../../assets/icons/Friends.svg";
//component
import { useRecoilValue } from "recoil";
import { loginUserState } from "../../recoil/state";
import { Body2, Heading1 } from "../../style/font";

const MyProfile = () => {
  const user = useRecoilValue(loginUserState);
  return (
    <MyProfileWrapper>
      <PeopleIcon />
      <Heading1 color="var(--gray-7)">{user.name}</Heading1>
      <Body2 color="var(--gray-4)">
        {user.company}/{user.department}/{user.rank}
      </Body2>
      <Body2 color="var(--gray-4)">010-1234-5678</Body2>
    </MyProfileWrapper>
  );
};
export default MyProfile;
const MyProfileWrapper = styled.div`
  display: flex;
  height: 14.438rem;
  width: 23.4375rem;
  flex-direction: column;
  align-items: center;
  & > ${Heading1} {
    margin: 0.935rem 0 0.625rem 0;
  }
  border-bottom: solid 0.0625rem var(--gray-3);
`;
const PeopleIcon = styled(People)`
  width: 7.4375rem;
  height: 7.4375rem;
`;
