//style
import styled from "styled-components";
import { ReactComponent as Liked } from "../../assets/icons/Liked.svg";
import { ReactComponent as NotLiked } from "../../assets/icons/NotLiked.svg";
import { Caption1 } from "../../style/font";

interface LikeButtonProps {
  isMyChat: boolean;
  isLiked: number;
}
export const LikeButton = (props: LikeButtonProps) => {
  if (props.isLiked === 1) {
    return (
      <LikeButtonWrapper isMyChat={props.isMyChat} isLiked={true}>
        <Liked />
        <Caption1 color="var(--gray-2)">취소</Caption1>
      </LikeButtonWrapper>
    );
  } else {
    return (
      <LikeButtonWrapper isMyChat={props.isMyChat} isLiked={false}>
        <NotLiked />
        <Caption1 color="var(--gray-2)">좋아요</Caption1>
      </LikeButtonWrapper>
    );
  }
};

const LikeButtonWrapper = styled.div<{ isMyChat: boolean; isLiked: boolean }>`
  width: ${(props) => (props.isLiked ? "4.125rem" : "4.875rem")};
  height: 1.625rem;
  border-radius: 6.25rem;
  background-color: #d9d9d9;
  ${(props) =>
    props.isMyChat ? "margin-right : 1.25rem" : "margin-left : 1.25rem"};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  /*더블클릭 선택 막기*/
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
`;
