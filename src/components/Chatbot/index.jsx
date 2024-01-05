/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ChatBot from 'react-simple-chatbot';
import { ChatIcon } from '../ChatIcon';
import { ChatHeader } from '../ChatHeader';
import { user } from '../../constants/user';
import { botMessagesPt, stepsPt } from '../../lib/stepsPt';
import { useEffect, useState } from 'react';
import { botMessagesEs, stepsEs } from '../../lib/stepsEs';
import { botMessagesEn, stepsEn } from '../../lib/stepsEn';
import { sendEmail } from '../../utils/sendEmail';


const Chatbot = () => {

  const [watcher, setWatcher] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [steps, setSteps] = useState(stepsPt(setWatcher, setFormData))
  const [messagesBot, setMessagesBot] = useState(botMessagesPt)
  const [language, setLanguage] = useState('pt');
  const [width, setWidth] = useState(window.innerWidth)


  const getLanguageFromURL = () => {
    const url = window.location.href;
    if (url.includes('/es/')) {
      setSteps(() => stepsEs(setWatcher, setFormData));
      setMessagesBot(() => botMessagesEs)
      setLanguage(() => 'es');
    } else if (url.includes('/en/')) {
      setSteps(() => stepsEn(setWatcher, setFormData));
      setMessagesBot(() => botMessagesEn)
      setLanguage(() => 'en');
    }
  }

  const handleEnd = ({ steps, values }) => {

    const form = {
      name: values[0],
      email: values[1],
      phone: values[2],
      enterprise: values[3],
      service_option: values[4],
      employees_option: values[5],
      language: language
    }

    sendEmail(form)
    setWatcher(false)
  };

  useEffect(() => {
    getLanguageFromURL();

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleBeforeUnload = (event) => {
      sendEmail({...formData, language: language})
      const message = 'Hey! Are you sure you don\'t want to answer Thomas\' questions to receive the best advice?';
      event.returnValue = message; 
      return message; 
    };

    window.addEventListener('resize', handleResize);

    if (watcher) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      window.removeEventListener('resize', handleResize);

      window.removeEventListener('beforeunload', handleBeforeUnload);

    };
  }, [language, watcher, formData]);

  return (
    <ChatBot
      key={language}
      floating={true}
      floatingIcon={<ChatIcon user={user} messagesBot={messagesBot} />}
      botAvatar={user.profileImage}
      avatarStyle={{

      }}
      headerTitle={<ChatHeader user={user} onlineStatus={
        language === 'en'
          ? 'Online now'
          : language === 'pt'
            ? 'Online agora'
            : 'Online ahora'
      } />}
      steps={steps}
      handleEnd={handleEnd}
      placeholder={
        language === 'en'
          ? 'Type the message'
          : language === 'pt'
            ? 'Digite mensagem'
            : 'Tu respuesta'
      }
      userDelay={0}
      style={{
        height: (width > 568) ? "515px" : "100vh",
        'zIndex': '99999'
      }}
      hideUserAvatar={true}
    />
  );
};

export default Chatbot;


