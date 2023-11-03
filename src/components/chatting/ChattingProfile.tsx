//style
import { ReactComponent as Back } from "../../assets/icons/Back.svg";
import { ReactComponent as Call } from "../../assets/icons/Call.svg";
import { ReactComponent as Friends } from "../../assets/icons/Friends.svg";
import { ReactComponent as More } from "../../assets/icons/More.svg";
import { Heading2, Caption1 } from "../../style/font";
import "../../style/color.css";
import styled from "styled-components";
//component
import { usersState } from "../../recoil/state";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
interface ChattingProfileProps {
  targetId: number;
  onUserSwitch: () => void;
}
function ChattingProfile(props: ChattingProfileProps) {
  const users = useRecoilValue(usersState);
  const navigate = useNavigate();
  return (
    <ChattingProfileWrapper>
      <StyledBack
        onClick={() => {
          navigate("/chat");
        }}
      />
      <StyledFriends />
      <UserInfoWrapper onClick={props.onUserSwitch}>
        <UserWrapper>
          <Heading2 color="var(--gray-7)">
            {users[props.targetId].name}
          </Heading2>
          <Caption1
            color={
              users[props.targetId].isWorking === "근무 중"
                ? "var(--green)"
                : "var(--gray-4)"
            }
          >
            {users[props.targetId].isWorking}
          </Caption1>
        </UserWrapper>
        <Caption1 color="var(--gray-4)">
          {users[props.targetId].company}/{users[props.targetId].department}/
          {users[props.targetId].rank}
        </Caption1>
      </UserInfoWrapper>
      <StyledCall />
      <StyledMore />
    </ChattingProfileWrapper>
  );
}
const ChattingProfileWrapper = styled.div`
  width: 22.1875rem;
  height: 3rem;
  padding: 0.5rem 0.625rem;
  display: flex;
  align-items: center;
`;
const StyledBack = styled(Back)`
  width: 0.625rem;
  height: 1.25rem;
  padding: 0.25rem 0.625rem;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    filter: brightness(300%);
  }
`;
const StyledFriends = styled(Friends)`
  width: 3rem;
  height: 3rem;
  margin-left: 1.06rem;
`;
const StyledCall = styled(Call)`
  width: 1.125rem;
  height: 1.125rem;
  padding: 0.3125rem;
`;
const StyledMore = styled(More)`
  margin-left: 0.31rem;
`;
const UserInfoWrapper = styled.div`
  width: 12.25rem;
  padding-top: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /*왼쪽으로 정렬*/
  margin-left: 0.5rem;
`;
const UserWrapper = styled.div`
  display: flex;
  gap: 0.31rem;
`;
export default ChattingProfile;
