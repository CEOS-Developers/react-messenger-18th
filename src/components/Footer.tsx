//style
import styled from "styled-components";
import { ReactComponent as People } from "../assets/icons/People.svg";
import { ReactComponent as Chat } from "../assets/icons/Chat.svg";
import { ReactComponent as Setting } from "../assets/icons/Setting.svg";
//component
import { Navigate, useNavigate } from "react-router-dom";
interface FooterProps {
  page: string;
}
//page에 따라 버튼색 변환
const getPeopleIconStyles = (page: string) => {
  if (page === "people") {
    return "fill: var(--green);";
  } else {
    return "fill: var(--gray-6);";
  }
};
const getChatIconStyles = (page: string) => {
  if (page === "chat") {
    return "fill: var(--green);";
  } else {
    return "fill: var(--gray-6);";
  }
};
const getSettingIconStyles = (page: string) => {
  if (page === "setting") {
    return "fill: var(--green);";
  } else {
    return "fill: var(--gray-6);";
  }
};
const Footer = ({ page }: FooterProps) => {
  const navigate = useNavigate();
  return (
    <FooterWrapper>
      <PeopleIcon
        onClick={() => {
          navigate("/");
        }}
        page={page}
      />
      <ChatIcon
        onClick={() => {
          navigate("/chat");
        }}
        page={page}
      />
      <SettingIcon
        onClick={() => {
          navigate("/setting");
        }}
        page={page}
      />
    </FooterWrapper>
  );
};
const FooterWrapper = styled.div`
  height: 2.875rem;
  background-color: var(--gray-1);
  position: relative;
`;
const PeopleIcon = styled(People)<FooterProps>`
  padding: 0.125rem;
  position: absolute;
  left: 5.125rem;
  top: 1rem;
  path {
    ${(props) => getPeopleIconStyles(props.page)}
  }
  cursor: pointer;
`;

const ChatIcon = styled(Chat)<FooterProps>`
  padding: 0.125rem;
  position: absolute;
  left: 10.9385rem;
  top: 1rem;
  path {
    ${(props) => getChatIconStyles(props.page)}
  }
  cursor: pointer;
`;
const SettingIcon = styled(Setting)<FooterProps>`
  padding: 0.188rem 0.216rem;
  position: absolute;
  right: 4.813rem;
  top: 1rem;
  path {
    ${(props) => getSettingIconStyles(props.page)}
  }
  cursor: pointer;
`;
export default Footer;
