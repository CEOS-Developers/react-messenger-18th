import React from "react";
import styled from "styled-components";

interface ProfileI {
  img: string;
  size: string;
  onClick: () => void;
}

export default function Profile({ img, size, onClick }: ProfileI) {
  return (
    <ProfileWrapper img={img} size={size} onClick={onClick}></ProfileWrapper>
  );
}

const ProfileWrapper = styled.div<ProfileI>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;
