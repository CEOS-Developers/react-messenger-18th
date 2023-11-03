import styled from "styled-components";
import StatusBar from "../StatusBar/statusbar";
import ChatTitle from "../ChatTitle/chatTitle";
import backArrow from "../../assets/images/backArrow.svg";
import backText from "../../assets/images/BackIcon.svg";
import editIcon from "../../assets/images/Edit.svg";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/profile");
  };
  return (
    <TopBarContainer>
      <div onClick={handleBackClick}>
        <BackArrow src={backArrow} />
        <BackText src={backText} />
      </div>
      <EditIcon src={editIcon} />
    </TopBarContainer>
  );
};
const TopBarContainer = styled.div`
  width: 100%;
  height: 1.25rem;
  padding: 0rem 1.12rem;
  margin-top: 0.81rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BackArrow = styled.img`
  width: 0.56088rem;
  height: 0.9745rem;
  margin-right: 0.31rem;
`;
const BackText = styled.img`
  width: 2.1875rem;
  height: 1.125rem;
`;
const EditIcon = styled.img`
  width: 1.3125rem;
  height: 1.25rem;
`;

export default TopBar;
