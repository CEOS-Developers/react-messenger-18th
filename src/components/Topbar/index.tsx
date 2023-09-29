import { useLocation } from "react-router-dom";
import { TopbarContainer, TopbarFloatingWrapper } from "./index.element";
import statusBar from "@/assets/images/statusBar.png";
import { useEffect, useState } from "react";
import TopbarContent from "./content";
import backIconSrc from "@/assets/images/back.svg";
import alienIconSrc from "@/assets/images/alien.png";
import mjIconSrc from "@/assets/images/mj.png";
import writeIconSrc from "@/assets/images/write.svg";
import callIconSrc from "@/assets/images/call.svg";
import videoIconSrc from "@/assets/images/video.svg";

/**
 *
 * @pathname
 * 1 : 채팅방
 * 2 : 채팅방 목록
 * 3 : setting
 */
const Topbar = () => {
  const [renderType, setRenderType] = useState(0);
  const { pathname } = useLocation();

  // 라우팅된 주소에 따라 renderType 변경
  useEffect(() => {
    switch (pathname) {
      case "/chatlist":
        setRenderType(2);
        break;
      case "/setting":
        setRenderType(3);
        break;
      default:
        setRenderType(1);
        break;
    }
  }, [pathname]);

  return (
    <TopbarContainer>
      <TopbarFloatingWrapper>
        <img
          src={statusBar}
          alt="statusBar"
        />
      </TopbarFloatingWrapper>
      {renderType === 1 && (
        <TopbarContent
          leftIcon={backIconSrc}
          leftSize={26}
          midContent={{
            name: "김민지",
            iconSrc: mjIconSrc,
          }}
          rightIcon={[callIconSrc, videoIconSrc]}
        />
      )}
      {renderType === 2 && (
        <TopbarContent
          leftIcon={alienIconSrc}
          leftSize={32}
          rightIcon={[writeIconSrc]}
        />
      )}
    </TopbarContainer>
  );
};

export default Topbar;
