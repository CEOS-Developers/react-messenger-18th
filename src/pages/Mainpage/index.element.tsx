import styled from "styled-components";

export const MainpageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ChatTime = styled.div`
  text-align: center;
  color: ${(props) => props.theme.palette.gray1};
  margin: 0.6rem 0 1.2rem 0;

  ${(props) => props.theme.typography.Time};
`;

export const ChatLineWrapper = styled.div<{ from: 1 | 2 }>`
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  align-items: center;
  padding: 0 1.2rem;
  justify-content: ${(props) => (props.from === 1 ? "flex-end" : "flex-start")};
  margin-bottom: 0.8rem;
  span {
    align-self: flex-end;
    height: 4rem;
    display: flex;
    img {
      width: 2.8rem;
      height: 2.8rem;
      align-self: center;
    }
  }
`;
