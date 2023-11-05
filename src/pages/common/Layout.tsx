import NavBar from 'pages/common/NavBar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayOutContainer>
      <Outlet />
      <NavBar />
    </LayOutContainer>
  );
};

const LayOutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
