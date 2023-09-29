import styled, { css } from "styled-components";

interface ICBCProps {
  from: "me" | "partner";
  liked: boolean;
}
export const ChatBubbleContainer = styled.div<ICBCProps>`
  max-width: 263px;
  width: fit-content;
  white-space: pre-wrap;
  word-break: break-all;
  padding: 1rem 1.4rem;
  border-radius: 2rem;
  position: relative;

  background-color: ${(props) =>
    props.from === "me"
      ? props.theme.palette.blue2
      : props.theme.palette.gray2};

  color: ${(props) =>
    props.from === "me"
      ? props.theme.palette.white1
      : props.theme.palette.black};

  ${(props) => props.theme.typography.Body};

  ${(props) =>
    props.liked &&
    css`
      ::after {
        content: "❤️";
        position: absolute;
        bottom: 0;
        right: 0rem;
        transform: translate(0, 50%);
        font-size: 1.5rem;
        border: 2px solid ${(props) => props.theme.palette.white1};
        background-color: ${(props) => props.theme.palette.gray2};
        z-index: 100;
        padding: 0.2rem 0.5rem;
        border-radius: 5rem;
      }
    `}
`;
export const ChatBubbleHoverContent = styled.div`
  position: relative;
  top: 0.2rem;
  left: 0.7rem;
  font-size: 1.3rem;
  color: ${(props) => props.theme.palette.gray1};
`;
