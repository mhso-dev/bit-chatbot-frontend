import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  background: #ffffff;
  color: gray;
  display: flex;
  padding: 0.2rem;
  margin-top: 1rem;
`;

const ProfileImage = styled.div`
  border-radius: 10px;
  min-height: 65px;
  max-height: 65px;
  min-width: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("profile_img.png");
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

const ProfileName = styled.h1`
  margin-top: 0.1rem;
  color: black;
  font-size: 1rem;
`;

const RyanMessage = styled.div`
  margin-top: 0.5em;
`;

const RyanProfileComponent = ({ message }) => {
  return (
    <ProfileContainer>
      <ProfileImage />
      <TextContainer>
        <ProfileName>알바하는 라이언</ProfileName>
        <RyanMessage>{message}</RyanMessage>
      </TextContainer>
    </ProfileContainer>
  );
};

export default RyanProfileComponent;
