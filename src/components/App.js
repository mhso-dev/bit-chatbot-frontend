import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import MessageContainer from "../container/MessageContainer";
import InputMessageContainer from "../container/InputMessageContainer";
import { useEffect, useState } from "react";
import { chatApi } from "../api";

const MainContainer = styled.div`
  margin: auto;
  max-width: 640px;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  // 1. 채팅방에 띄워줄 메세지의 목록
  const [messages, setMessages] = useState([
    {
      text: "안녕하세요! 라이언벅스입니다.",
      isUser: false,
    },
  ]);

  // 2. 사용자가 입력한 내용을 관리할 state
  const [userMessage, setUserMessage] = useState("");

  // userMessage가 변경되면 서버에 전송
  useEffect(() => {
    // 전송할 비동기 함수 만들기
    const sendMessage = async () => {
      try {
        // 입력한 내용이 있으면 전송
        if (userMessage !== "") {
          const returnMessage = await chatApi.sendMessage(userMessage);

          const newMessages = messages.concat({
            text: returnMessage,
            isUser: false,
          });

          setMessages(newMessages);
        }
      } catch (error) {
        alert(error);
      }
    };

    sendMessage();
  }, [userMessage]);

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <MessageContainer messages={messages} />
        <InputMessageContainer
          setUserMessage={setUserMessage}
          setMessages={setMessages}
          messages={messages}
        />
      </MainContainer>
    </>
  );
}

export default App;
