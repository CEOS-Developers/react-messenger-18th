import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <A
      style={{
        fontSize: "5rem",
      }}
    >
      Home
    </A>
  );
}

const A = styled.div`
  ${(props) => props.theme.fontStyles.headLine1}
`;
