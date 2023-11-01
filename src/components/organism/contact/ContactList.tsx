import React from "react";
import ContactItem from "../../moleclues/contact/ContactItem";
import { Flex } from "../../atom/Flex";
import { dummyContactList } from "../../../assets/\bdummyList";
function ContactList() {
  return (
    <Flex
      direction="column"
      align="center"
      gap="16"
      height="623px"
      margin="16px 0px 0px"
    >
      {dummyContactList.map((item) => (
        <ContactItem
          name={item.name}
          introduction={item.introduction}
        ></ContactItem>
      ))}
    </Flex>
  );
}

export default ContactList;
