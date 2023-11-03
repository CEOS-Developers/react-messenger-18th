//style
import { ReactComponent as HomeBar } from "../assets/iphone/HomeBar.svg";
import styled from "styled-components";
interface HomeIndicatorProps {
  color: string;
}
const HomeIndicator = ({ color }: HomeIndicatorProps) => {
  return (
    <HomeBarWrapper color={color}>
      <StyledHomeBar />
    </HomeBarWrapper>
  );
};
const HomeBarWrapper = styled.div`
  height: 2.125rem;
  background-color: ${(props) => props.color || "var(--black)"};
  border-radius: 0 0 1.25rem 1.25rem;
`;
const StyledHomeBar = styled(HomeBar)`
  width: 8.375rem;
  height: 0.3125rem;
  padding: 1.3125rem 7.5rem 0.5rem 7.5625rem;
`;
export default HomeIndicator;
