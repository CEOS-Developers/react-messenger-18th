import React, { useEffect, useState } from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import groupIcon from "../../assets/images/groupIcon.svg";
import groupIconBlue from "../../assets/images/groupIconBlue.svg";
import messageIcon from "../../assets/images/messageIcon.svg";
import messageIconBlue from "../../assets/images/messageIconBlue.svg";
import horizontalIcon from "../../assets/images/horizontalIcon.svg";
import horizontalIconBlue from "../../assets/images/horizontalIconBlue.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
function BottomNavigation() {
  const [isBlue, setIsBlue] = useState({
    contact: false,
    chat: false,
    profile: false,
  });
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === "/contact") {setIsBlue({ ...isBlue, contact: true })};
    if (path === "/chat") setIsBlue({ ...isBlue, chat: true });
    if (path === "/profile") setIsBlue({ ...isBlue, profile: true });
  }, [location]);

  return (
    <Flex width="375px">
      <Flex justify="space-between" width="343px" margin="12px auto 0px">
        <Link to="/contact">
          <Flex width="58px" height="44px" justify="center" align="center">
            {isBlue.contact ? (
              <Icon
                src={groupIconBlue}
                style={{ width: "32px", height: "32px" }}
              />
            ) : (
              <Icon src={groupIcon} style={{ width: "32px", height: "32px" }} />
            )}
          </Flex>
        </Link>
        <Link to="/chat">
          <Flex width="58px" height="44px" justify="center" align="center">
            {isBlue.chat ? (
              <Icon
                src={messageIconBlue}
                style={{ width: "32px", height: "32px" }}
              />
            ) : (
              <Icon
                src={messageIcon}
                style={{ width: "32px", height: "32px" }}
              />
            )}
          </Flex>
        </Link>
        <Link to="/profile">
          <Flex width="58px" height="44px" justify="center" align="center">
            {isBlue.profile ? (
              <Icon
                src={horizontalIconBlue}
                style={{ width: "32px", height: "32px" }}
              />
            ) : (
              <Icon
                src={horizontalIcon}
                style={{ width: "32px", height: "32px" }}
              />
            )}
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}

export default BottomNavigation;
