import { useState, useMemo } from "react";
import { styled } from "styled-components";

type BottomInputBoxProps = {
  onCreate: (content: string) => void;
};

const BottomInputBox: React.FC<BottomInputBoxProps> = ({ onCreate }) => {
  const [message, setMessage] = useState("");

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
  color: #a4a2b7;
  font-weight: 400;
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
