/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BubbleMessage, LoaderText, OnlineIndicator, ProfileImage, ProfileImageContainer } from "../../styles/styles";


export const ChatIcon = ({ user, messagesBot }) => {
  const { name, profileImage } = user;
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedMessage, setMessage] = useState(messagesBot[0])
  const [loader, setLoader] = useState(true)
  const [showBubbleMessage, setShowBubbleMessage] = useState(true)

  const selectNewMessage = (index, messages) => {
    setLoader(true);
    setTimeout(() => {
      const nextIndex = (index + 1) % messages.length;
      setSelectedIndex(nextIndex);
      setMessage(messages[nextIndex]);
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewMessage(selectedIndex, messagesBot)
    }, 8000)
    return () => clearInterval(interval)
  })
  return (
    <ProfileImageContainer
      width='100%'
      height='100%'
      onClick={() => setShowBubbleMessage(false)}
    >
      {
        showBubbleMessage &&
        <BubbleMessage>
          {loader ? <LoaderText /> : selectedMessage}
        </BubbleMessage>
      }
      <ProfileImage src={profileImage} alt={`${name}'s Profile`} width='100%' height='100%' />
      <OnlineIndicator right='0' bottom='0' />
    </ProfileImageContainer>
  );
};