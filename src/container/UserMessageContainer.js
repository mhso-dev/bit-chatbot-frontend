import React from "react";
import UserMessageComponent from "../components/UserMessageComponent";

const UserMessageContainer = ({ message }) => {
  return <UserMessageComponent message={message} />;
};

export default UserMessageContainer;
