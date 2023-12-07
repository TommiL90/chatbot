/* eslint-disable react/prop-types */
import { OnlineIndicator, ProfileImage, ProfileImageContainer } from "../../styles/styles";

export const ChatIcon = ({ user }) => {
  const { name, profileImage } = user;

  return (
    <ProfileImageContainer width='100%' height='100%'>
      <ProfileImage src={profileImage} alt={`${name}'s Profile`} width='100%' height='100%' />
      <OnlineIndicator right='0' bottom='0' />
    </ProfileImageContainer>
  );
};