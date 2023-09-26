import React, { useEffect, useState } from "react";
import { ReactComponent as NetWork } from "../../icons/network.svg";
import { ReactComponent as Wifi } from "../../icons/wifi.svg";
import { ReactComponent as Battery } from "../../icons/battery.svg";
import styled from "styled-components";
import { getCurrentTime } from "../../hooks/getCurrentTime";

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
