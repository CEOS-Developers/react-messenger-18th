import { styled } from "styled-components";

const HomeBar = () => {
  return (
    <Container>
      <img src={"/img/home.png"} alt="home_bar" />
    </Container>
  );
};

export default HomeBar;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
