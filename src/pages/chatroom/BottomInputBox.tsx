import { useState, useMemo } from "react";
import { styled } from "styled-components";
import Icon from "./icon";

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
    }
  };

  // InputBox와 SentimentImage를 함께 렌더링하는 useMemo
  const inputBoxWithSentiment = useMemo(
    () => (
      <InputBoxContainer>
        <InputBox
          name="message"
          placeholder="메시지"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Emotion src={"/assets/emotion.svg"} alt="sentiment_smile" />
      </InputBoxContainer>
    ),
    [message]
  );

  return (
    <Container>
      <BottomBarContainer>
        <Icon size={28} icon="attach_file" color="#A4A2B7" />
        {inputBoxWithSentiment}
        <InputBtn
          onClick={handleSubmit}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <CustomIcon
              size={28}
              icon="send"
              color={isHovered ? "#1263DC" : "#A4A2B7"}
            />
          </div>
        </InputBtn>
      </BottomBarContainer>
    </Container>
  );
};

export default BottomInputBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  width: 343px;
`;

const BottomBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 276px;
  padding-left: 20px;
`;

const InputBox = styled.input`
  max-width:213px;
  align-items: center;
  flex:1;
  border: none;
  padding:12px;
  padding-right:35px;
  outline: none;
  border-radius: 16px;
  background-color: #f2f1f8;
  font-weight: 400;
  color: #33333A; 
  

  ::placeholder {
    color: #A4A2B7; 
    font-weight: 400;
`;

const Emotion = styled.img`
  position: relative; /* position을 absolute로 변경 */
  top: 50%;
  right: 11%;
  z-index: 1;
`;

const InputBtn = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
`;

const CustomIcon = styled(Icon)`
  cursor: pointer;
`;
