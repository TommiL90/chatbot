import { ChatHeaderContainer, OnlineIndicator, OnlineStatus, ProfileImage, ProfileImageContainer, UserName } from "../../styles/styles";

/* eslint-disable react/prop-types */
export const ChatHeader = ({ user, onlineStatus }) => {
  const { name, profileImage } = user;

  return (
    <ChatHeaderContainer>
      <ProfileImageContainer>
        <ProfileImage src={profileImage} alt={`${name}'s Profile`} />
        <OnlineIndicator />
      </ProfileImageContainer>
      <div>
        <UserName>{name}</UserName>
        <OnlineStatus>{onlineStatus}</OnlineStatus>
      </div>
    </ChatHeaderContainer>
  );
};