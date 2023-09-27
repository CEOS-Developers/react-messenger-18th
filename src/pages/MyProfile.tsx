import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as Arrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as Edit } from "../icons/edit.svg";

export default function MyProfile() {
  const navigate = useNavigate();
  const arrowIconClicked = () => {
    navigate(-1);
  };
  return (
    <PageHeader
      leftIcon={<Arrow onClick={arrowIconClicked} />}
      title="프로필"
      rightIcon1={<Edit />}
    />
  );
}
