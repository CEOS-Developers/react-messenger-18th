import styled from "styled-components";

export const BottomFloaterContainer = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
  gap: 0.8rem;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.palette.white1};
  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 0.5rem 0 1.5rem;
    border-radius: 1.8rem;
    background-color: ${(props) => props.theme.palette.gray2};
    input {
      font-size: 1.6rem;
      background-color: transparent;
      width: 100%;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
`;
