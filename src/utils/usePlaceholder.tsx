import { useState } from "react";

const useInputPlaceholder = () => {
  const [typeMessage, setTypeMessage] = useState("메세지를 입력하세요");
  const [input, setInput] = useState("");

  const handleFocus = () => {
    setTypeMessage("");
  };
  const handleBlur = () => {
    if (input.trim() === "") {
      setTypeMessage("메세지를 입력하세요");
    }
  };
  const handleOnChange = (e: any) => {
    setInput(e.target.value);
  };

  return {
    typeMessage,
    setTypeMessage,
    input,
    setInput,
    handleFocus,
    handleBlur,
    handleOnChange,
  };
};
export default useInputPlaceholder;
