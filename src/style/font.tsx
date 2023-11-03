import styled from "styled-components";
import "../style/color.css";
export const Heading1 = styled.div`
  color: ${(props) => props.color || "var(--white)"};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; /* 91.667% */
  letter-spacing: -0.0255rem;
`;
export const Heading2 = styled.div`
  color: ${(props) => props.color || "var(--white)"};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; /* 100% */
  letter-spacing: -0.0255rem;
`;
export const Body1 = styled.div`
  color: ${(props) => props.color || "var(--white)"};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem; /* 122.222% */
  letter-spacing: -0.0255rem;
`;
export const Body2 = styled.div`
  color: ${(props) => props.color || "var(--white)"};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: -0.0255rem;
`;
export const Caption1 = styled.div`
  color: ${(props) => props.color || "var(--white)"};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
`;
export const Caption2 = styled.div`
  color: ${(props) => props.color || "var(--white)"};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.375rem; /* 157.143% */
`;
