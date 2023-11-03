import React, { useEffect, useState } from "react";
import { Flex } from "../atom/Flex";
import { Icon } from "../atom/Icon";
import groupIcon from "../../assets/images/groupIcon.svg";
import groupIconBlue from "../../assets/images/groupIconBlue.svg";
import messageIcon from "../../assets/images/messageIcon.svg";
import messageIconBlue from "../../assets/images/messageIconBlue.svg";
import horizontalIcon from "../../assets/images/horizontalIcon.svg";
import horizontalIconBlue from "../../assets/images/horizontalIconBlue.svg";
import { Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isSearchState } from "../../recoil/atom";

function BottomNavigation() {
  const [isBlue, setIsBlue] = useState({
    contact: false,
    chat: false,
    profile: false,
  });
  const setIsSearch = useSetRecoilState(isSearchState);
  const location = useLocation();

  useEffect(() => {
    setIsSearch(false);
    const path = location.pathname;
    setIsBlue((prevState) => ({
      ...prevState,
      contact: path === "/contact",
      chat: path === "/chat",
      profile: path === "/profile",
    }));
  }, [location]);

  return (
    <Flex width="375px">
      <Flex justify="space-between" width="343px" margin="12px auto 0px">
        <Link to="/contact">
          <Flex width="58px" height="44px" justify="center" align="center">
            {isBlue.contact ? (
              <Icon src={groupIconBlue} style={{ width: "32px", height: "32px" }} />
            ) : (
              <Icon src={groupIcon} style={{ width: "32px", height: "32px" }} />
            )}
          </Flex>
        </Link>
        <Link to="/chat">
          <Flex width="58px" height="44px" justify="center" align="center">
            {isBlue.chat ? (
              <Icon src={messageIconBlue} style={{ width: "32px", height: "32px" }} />
            ) : (
              <Icon src={messageIcon} style={{ width: "32px", height: "32px" }} />
            )}
          </Flex>
        </Link>
        <Link to="/profile">
          <Flex width="58px" height="44px" justify="center" align="center">
            {isBlue.profile ? (
              <Icon src={horizontalIconBlue} style={{ width: "32px", height: "32px" }} />
            ) : (
              <Icon src={horizontalIcon} style={{ width: "32px", height: "32px" }} />
            )}
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}

export default BottomNavigation;
