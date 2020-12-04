import React, { useEffect, useRef } from "react";
import MessageComponent from "../components/MessageComponent";

const MessageContainer = ({ messages }) => {
  const messageRef = useRef();
  // message가 변경되면 스크롤을 최하단으로 옮기기
  useEffect(() => {
    // messageRef가 지정 되었으면
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  return <MessageComponent messages={messages} messageRef={messageRef} />;
};

export default MessageContainer;
