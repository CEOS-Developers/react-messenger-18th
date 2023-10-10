import React from "react";
import HomeHeader from "../organism/HomeHeader";
import HomeFooter from "../organism/HomeFooter";
import ContactList from "../organism/contact/ContactList";

function ContactTemplate() {
  return (
    <>
      <HomeHeader title="연락처" isBorder={false}/>
      <ContactList />
      <HomeFooter />
    </>
  );
}

export default ContactTemplate;
