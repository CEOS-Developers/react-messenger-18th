import styled from 'styled-components';

export const Space = ({ width, height }) => {
  return <SpaceBase width={width} height={height} />;
};

const SpaceBase = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;