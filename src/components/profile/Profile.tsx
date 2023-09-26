import React from "react";
import styled from "styled-components";

interface ProfileI {
  img: string;
  size: string;
}

export default function Profile({ img, size }: ProfileI) {
  return <ProfileWrapper img={img} size={size}></ProfileWrapper>;
}

const ProfileWrapper = styled.div<ProfileI>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;
