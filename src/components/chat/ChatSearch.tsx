//style
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
//component
import { useRecoilState } from "recoil";
import { nameSearchState } from "../../recoil/state";
const ChatSearch = () => {
  const [input, setInput] = useRecoilState(nameSearchState);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setInput("");
    }
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <ChatSearchWrapper>
      <SearchIcon />
      <StyledForm onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="무슨 대화를 나눴더라?"
          value={input}
          onChange={handleOnChange}
        ></input>
      </StyledForm>
    </ChatSearchWrapper>
  );
};
export default ChatSearch;
const ChatSearchWrapper = styled.div`
  height: 4.125rem;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StyledForm = styled.form`
  .search-input {
    border: none;
    background-color: var(--gray-1);
    width: 16.6875rem;
    height: 2.875rem;
    border-radius: 3.125rem;
    padding-left: 4.25rem;
    font-family: "Pretendard-Regular"; /*globalstyle 왜 적용안되는지?*/
    color: var(--gray-7);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.0255rem;
    &::placeholder {
      font-family: "Pretendard-Regular";
      color: var(--gray-4);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5rem; /* 133.333% */
      letter-spacing: -0.0255rem;
    }
  }
`;
const SearchIcon = styled(Search)`
  position: absolute;
  width: 1.4375rem;
  height: 1.4375rem;
  padding: 0.21875rem 0.15625rem;
  left: 2.44rem;
  top: 1.12rem;
`;
