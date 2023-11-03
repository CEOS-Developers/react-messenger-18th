//style
import { ReactComponent as Battery } from "../assets/iphone/Battery.svg";
import { ReactComponent as Clock } from "../assets/iphone/Clock.svg";
import { ReactComponent as Signal } from "../assets/iphone/Signal.svg";
import { ReactComponent as WifiConnection } from "../assets/iphone/WifiConnection.svg";
import styled from "styled-components";
function StatusBar() {
  return (
    <StatusBarWrapper>
      <StyledClock />
      <Indicators>
        <StyledSignal />
        <StyledWifi />
        <StyledBattery />
      </Indicators>
    </StatusBarWrapper>
  );
}
const StatusBarWrapper = styled.div`
  width: 23.4375rem;
  height: 2.938rem;
  position: relative;
`;

const StyledClock = styled(Clock)`
  position: absolute;
  width: 4.125rem;
  height: 1.4375rem;
  padding: 0.8125rem 0 0.6875rem 1.375rem;
  right: 17.9375rem;
`;
//indicator wrap
const Indicators = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.40625rem;
  left: 17.4375rem;
  right: 1.16875rem;
  top: 1.4375rem;
  bottom: 0.6875rem;
`;
const StyledSignal = styled(Signal)`
  width: 1.2481875rem;
  height: 0.75rem;
`;
const StyledWifi = styled(WifiConnection)`
  width: 1.0625rem;
  height: 0.78125rem;
`;
const StyledBattery = styled(Battery)`
  width: 1.708125rem;
  height: 0.8125rem;
`;
export default StatusBar;
