import styled from "styled-components";
import timeIcon from "../../assets/images/Time Style.svg";
import cellularIcon from "../../assets/images/Cellular Connection.svg";
import wifiIcon from "../../assets/images/Wifi.svg";
import batteryIcon from "../../assets/images/Battery.svg";

const StatusBar = () => {
  return (
    <StatusBarContainer>
      <TimeIcon src={timeIcon} alt="time Icon" />
      <StatusBarRight>
        <CellularIcon src={cellularIcon} alt="cellular Icon" />
        <WifiIcon src={wifiIcon} alt="wifi Icon" />
        <BatteryIcon src={batteryIcon} alt="battery Icon" />
      </StatusBarRight>
    </StatusBarContainer>
  );
};

const StatusBarContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TimeIcon = styled.img`
  width: 3.375rem;
  height: 1.3125rem;
  padding-bottom: 0.17rem;
  margin-left: 0.2rem;
  right: 16.33rem;
`;

const CellularIcon = styled.img`
  width: 1.0625rem;
  height: 0.66669rem;
`;
const WifiIcon = styled.img`
  width: 0.95831rem;
  height: 0.6875rem;
`;
const BatteryIcon = styled.img`
  width: 1.5205rem;
  height: 0.70831rem;
  margin-right: 1.12rem;
`;

const StatusBarRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.31rem;
  left: 18.37rem;
  right: 0.9rem;
  /* top: 1.08rem;
  bottom: 0.96rem; */
`;
export default StatusBar;
