import { useState, useMemo } from "react";
import { styled } from "styled-components";

type BottomInputBoxProps = {
  onCreate: (content: string) => void;
};

const BottomInputBox: React.FC<BottomInputBoxProps> = ({ onCreate }) => {
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // input_box에 엔터키 입력시 함수
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing) return;
      handleSubmit();
    }
  };

  // 새로운 데이터가 입력될 때의 함수
  const handleSubmit = () => {
    if (message.trim() !== "") {
      onCreate(message);
      setMessage("");
    } else {
      return;
    }
  };

  // InputBox와 SentimentImage를 함께 렌더링하는 useMemo
  const inputBoxWithSentiment = useMemo(
    () => (
      <InputBoxWrapper>
        <InputBox
          name="message"
          placeholder="메시지"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <SentimentImage
          src={"/img/sentiment_satisfied_alt.png"}
          alt="sentiment_smile"
        />
      </InputBoxWrapper>
    ),
    [message]
  );

  return (
    <Wrapper>
      <AttachFileImage src={"/img/attach_file.png"} alt="attach_file" />
      {inputBoxWithSentiment}
      <InputBtn
        onClick={handleSubmit}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <VectorImgContainer>
          <img
            src={isHovered ? "/img/vector_active.png" : "/img/Vector.png"}
            alt="vector"
            style={{ width: "20px", height: "20px" }}
          />
        </VectorImgContainer>
      </InputBtn>
    </Wrapper>
  );
};

export default BottomInputBox;

const Wrapper = styled.div`
  position: fixed;
  bottom: 34px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  width: 375px;
`;

const AttachFileImage = styled.img`
  margin: 4px;
`;

const InputBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const InputBox = styled.input`
width: 243px;
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #f2f1f8;
  font-weight: 400;
  color: rgba(51, 51, 58, 1); 
  font-weight: 400;

  ::placeholder {
    color: #a4a2b7; 
    font-weight: 400;
`;

const SentimentImage = styled.img`
  position: absolute;
  right: 100px;
  top: 27%;
`;
const VectorImgContainer = styled.div`
  position: relative;
`;

const InputBtn = styled.button`
  right: 47px;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  padding: 4px;
  position: absolute;
  top: 25%;
`;
