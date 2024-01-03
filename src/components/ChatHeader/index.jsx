import { ChatHeaderContainer, OnlineIndicator, OnlineStatus, ProfileImage, ProfileImageContainer, UserName, UserNameContainer } from "../../styles/styles";

/* eslint-disable react/prop-types */
export const ChatHeader = ({ user, onlineStatus }) => {
  const { name, profileImage } = user;

  return (
    <ChatHeaderContainer>
      <ProfileImageContainer
      width='35px'
      height='35px'
      >
        <ProfileImage src={profileImage} alt={`${name}'s Profile`} />
        <OnlineIndicator />
      </ProfileImageContainer>
      <UserNameContainer>
        <UserName>{name}</UserName>
        <OnlineStatus>{onlineStatus}</OnlineStatus>
      </UserNameContainer>
    </ChatHeaderContainer>
  );
};