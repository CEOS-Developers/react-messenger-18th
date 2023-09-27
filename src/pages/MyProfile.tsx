import React from "react";
import PageHeader from "../components/common/PageHeader";
import { ReactComponent as LeftArrow } from "../icons/arrows/leftarrow.svg";
import { ReactComponent as Edit } from "../icons/edit.svg";
import { useNavigateOnClick } from "../customHooks/useNavigateOnClick";

export default function MyProfile() {
  const { navigateBack } = useNavigateOnClick();
  return (
    <PageHeader
      leftIcon={<LeftArrow onClick={navigateBack} />}
      title="프로필"
      rightIcon1={<Edit />}
    />
  );
}
