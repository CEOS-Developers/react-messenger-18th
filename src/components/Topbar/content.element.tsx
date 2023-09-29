import styled from "styled-components";
export const TopbarInnerContainer = styled.div`
  background-color: ${(props) => props.theme.palette.white2};
  height: 5rem;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  align-items: center;
`;

export const MidContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  margin-left: 1.4rem;
  .textDiv {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .subText {
      ${(props) => props.theme.typography.SubText};
    }
    .caption {
      ${(props) => props.theme.typography.Caption};
      color: ${(props) => props.theme.palette.gray1};
    }
  }
`;

export const EndContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-right: 0.7rem;
  div {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  span[class*="video"] {
    margin-left: 0.35rem;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.green};
  }
`;
