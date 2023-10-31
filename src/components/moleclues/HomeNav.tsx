import React, { useState } from "react";
import { Flex } from "../atom/Flex";
import { Text } from "../atom/Text";
import { Icon } from "../atom/Icon";
import chatAddIcon from "../../assets/images/chatAddIcon.svg";
import searchIcon from "../../assets/images/serachIcon.svg";
import searchGrayIcon from "../../assets/images/searchGrayIcon.svg";
import { Input } from "../atom/Input";

function HomeNav({ title }) {
  const [isSearch, setIsSearch] = useState(false);
  const toggleState = () => {
    setIsSearch(!isSearch);
    console.log("df");
  };
  return (
    <>
      <Flex align="center" gap="8" height="30px" justify="center">
        {isSearch ? (
          <Flex align="center" position="relative" gap="13">
            <Icon
              src={searchGrayIcon}
              style={{
                position: "absolute",
                top: "12px",
                left: "8px",
                width: "16px",
                height: "16px",
              }}
            />
            <Input
              width="295px"
              weight="400"
              placeholder="검색"
              bgcolor="chatBackground"
              padding="0px 28px "
              fontSize="16px"
              lineheight="40px"
            />
            <Text
              size="12px"
              weight="600"
              onClick={toggleState}
              cursor="pointer"
            >
              취소
            </Text>
          </Flex>
        ) : (
          <>
            {" "}
            <Flex width="263px">
              <Text
                size="18px"
                lineheight="30px"
                font="Pretendard"
                weight="600"
              >
                {title}
              </Text>
            </Flex>
            <Icon src={chatAddIcon} />
            <Icon
              src={searchIcon}
              onClick={toggleState}
              style={{ cursor: "pointer" }}
            />{" "}
          </>
        )}
      </Flex>
    </>
  );
}

export default HomeNav;
