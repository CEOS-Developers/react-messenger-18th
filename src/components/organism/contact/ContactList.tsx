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
      <ContactItem />
      <ContactItem />
    </Flex>
  );
}

export default ContactList;
