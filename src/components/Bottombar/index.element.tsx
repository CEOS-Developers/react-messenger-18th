import styled from "styled-components";

export const BottomBarContainer = styled.div<{ extend: 1 | 0 }>`
  width: 100%;
  height: ${(props) => (props.extend === 1 ? "8.8rem" : "3.4rem")};
  display: flex;
  flex-direction: column;
`;
