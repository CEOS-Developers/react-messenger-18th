import React from "react";
import styled from "styled-components";

interface ProfileProps {
  $img: string;
  $size: string;
  $addClass?: string;
  onClick?: () => void;
}

export default function Profile({
  $img,
  $size,
  $addClass,
  onClick,
}: ProfileProps) {
  return (
    <ProfileWrapper
      $img={$img}
      $size={$size}
      $addClass={$addClass}
      onClick={onClick}
    ></ProfileWrapper>
  );
}

const ProfileWrapper = styled.div<ProfileProps>`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  border: 0.8px solid ${(props) => props.theme.colors.gray5};
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  ${(props) => props.$addClass}
`;
