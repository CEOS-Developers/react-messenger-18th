import { BottomBarContainer } from "./index.element";
import bottomBarFloater from "@/assets/images/bottomBar.png";
import { useLocation } from "react-router-dom";
import ChatBottomFloater from "../ChatBottomFloater";
const BottomBar = () => {
  const { pathname } = useLocation();
  return (
    <BottomBarContainer extend={pathname.includes("/chat") ? 1 : 0}>
      {pathname.includes("/chat/") && <ChatBottomFloater />}
      <img
        src={bottomBarFloater}
        alt="bottomBar"
      />
    </BottomBarContainer>
  );
};

export default BottomBar;
