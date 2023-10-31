import React from "react";
import ContactItem from "../../moleclues/contact/ContactItem";
import { Flex } from "../../atom/Flex";
function ContactList() {
  return (
    <Flex
      direction="column"
      align="center"
      gap="16"
      height="623px"
      margin="16px 0px 0px"
    >
      <ContactItem name={"이현진"} introduction={"좋은 하루!"} />
      <ContactItem name={"김종완"} introduction={"안녕하세요~!"} />
      <ContactItem name={"정서강"} introduction={"CEOS 프론트엔드"} />
      <ContactItem name={"김서강"} introduction={"서강대학교 컴퓨터공학과"} />
    </Flex>
  );
}

export default ContactList;
