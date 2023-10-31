import styled from "styled-components";
import { color } from "../../assets/styles/color";

//img
import othermemo from "../../assets/images/othermemo-ex.svg";

const MemoBox = () => {
  const sender = "me";
  return (
    <Container>
      {sender === "me" ? (
        <div className="my-memo">
          <MemoBubble src={othermemo} />
          <MemoContent></MemoContent>
        </div>
      ) : (
        <div className="other-memo">
          <MemoBubble />
          <MemoContent></MemoContent>
        </div>
      )}
      <Profile />
      <Nicname>내 메모</Nicname>
    </Container>
  );
};

export default MemoBox;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemoBubble = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const MemoContent = styled.div``;

const Profile = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin: 38px 18px 0;

  border-radius: 50%;
  border: 0.7px solid ${color.grey3};
`;

const Nicname = styled.div`
  margin-top: 4px;

  color: #000;
  text-align: center;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
