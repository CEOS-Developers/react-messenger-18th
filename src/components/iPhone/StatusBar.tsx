import React from "react";
import { ReactComponent as NetWork } from "../../icons/statusbar/network.svg";
import { ReactComponent as Wifi } from "../../icons//statusbar/wifi.svg";
import { ReactComponent as Battery } from "../../icons/statusbar/battery.svg";
import styled from "styled-components";
import useGetCurrentTime from "../../customHooks/statusbar/useGetCurrentTime";

export default function StatusBar() {
  const currentTime = useGetCurrentTime();

  return (
    <StatusBarWrapper>
      <Time>
        <span>{currentTime}</span>
      </Time>
      <Status>
        <span>
          <NetWork />
        </span>
        <span>
          <Wifi />
        </span>
        <span>
          <Battery />
        </span>
      </Status>
    </StatusBarWrapper>
  );
}

const StatusBarWrapper = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    window.location.pathname === "/my-profile"
      ? props.theme.colors.gray7
      : null};
`;

const Time = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
  span {
    font-weight: 590;
    font-size: 1.7rem;
    line-height: 2.2rem;
  }
`;

const Status = styled(Time)`
  span {
    margin: 0 0.4rem;
  }
`;
