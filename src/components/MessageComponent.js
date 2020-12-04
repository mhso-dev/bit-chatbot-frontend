import React from "react";
import styled from "styled-components";
import RyanProfileContainer from "../container/RyanProfileContainer";
import UserMessageContainer from "../container/UserMessageContainer";

const MessagePresentaionContainer = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// 말풍선이 여기에 추가되면서 뜰 것
const MessageComponent = ({ messages, messageRef }) => {
  return (
    <MessagePresentaionContainer ref={messageRef}>
      {messages.map((message) =>
        message.isUser ? (
          <UserMessageContainer message={message.text} />
        ) : (
          <RyanProfileContainer message={message.text} />
        )
      )}
    </MessagePresentaionContainer>
  );
};

export default MessageComponent;
