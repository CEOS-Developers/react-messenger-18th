import { styled } from "styled-components";

const BottomInputBox = () => {
  return (
    <Wrapper>
      <AttachFileImage src={"/img/attach_file.png"} alt="attach_file" />
      <InputBoxWrapper>
        <InputBox name="message" placeholder="메시지" />
        <SentimentImage
          src={"/img/sentiment_satisfied_alt.png"}
          alt="sentiment_smile"
        />
      </InputBoxWrapper>

      <VectorImg src={"/img/Vector.png"} alt="vector" />
    </Wrapper>
  );
};

export default BottomInputBox;

const Wrapper = styled.div`
  position: fixed;
  bottom: 34px;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
`;

const AttachFileImage = styled.img`
  margin: 4px;
`;

const InputBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const InputBox = styled.input`
  width: 263px;
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #f2f1f8;
  font-color: #a4a2b7;
`;

const SentimentImage = styled.img`
  position: absolute;
  right: 65px;
  top: 27%;
`;
const VectorImg = styled.img`
  margin: 4px;
  padding: 4px;
`;
