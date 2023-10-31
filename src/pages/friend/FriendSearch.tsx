import GlobalButton from "components/GlobalButton";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";

const FriendSearch = () => {
  return (
    <HeaderWrapper>
      <GlobalHeader
        headText={"친구"}
        leftChild={
          <GlobalButton
            text="왼쪽 버튼"
            customType={"search"}
            onClick={() => alert("왼쪽 클릭")}
          />
        }
      />
    </HeaderWrapper>
  );
};

export default FriendSearch;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 38px;
  width: 375px;
`;
