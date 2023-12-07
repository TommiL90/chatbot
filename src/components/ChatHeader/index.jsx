import { ChatHeaderContainer, OnlineIndicator, OnlineStatus, ProfileImage, ProfileImageContainer, UserName } from "../../styles/styles";

/* eslint-disable react/prop-types */
export const ChatHeader = ({ user }) => {
  const { name, profileImage } = user;

  return (
    <ChatHeaderContainer>
      <ProfileImageContainer>
        <ProfileImage src={profileImage} alt={`${name}'s Profile`} />
        <OnlineIndicator />
      </ProfileImageContainer>
      <div>
        <UserName>{name}</UserName>
        <OnlineStatus>Online agora</OnlineStatus>
      </div>
    </ChatHeaderContainer>
  );
};