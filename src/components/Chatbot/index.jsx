/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ChatBot from 'react-simple-chatbot';
import { ChatIcon } from '../ChatIcon';
import { ChatHeader } from '../ChatHeader';
import { user } from '../../constants/user';
import { stepsPt } from '../../lib/stepsPt';
import { useEffect, useState } from 'react';
import { stepsEs } from '../../lib/stepsEs';
import { stepsEn } from '../../lib/stepsEn';


const Chatbot = () => {

  const [steps, setSteps] = useState(stepsPt)
  const [language, setLanguage] = useState('pt');

  const getLanguageFromURL = () => {
    const url = window.location.href;
    console.log(url.includes('/es/'))
    if (url.includes('/es/')) {
      setSteps(() => stepsEs);
      setLanguage(() => 'es');
    } else if (url.includes('/en/')) {
      setSteps(() => stepsEn);
      setLanguage(() => 'en');
    }
  }

  const handleEnd = ({ steps, values }) => {
    console.log('Formulario completado:', values);

    const form = {
      name: values[0],
      email: values[1],
      message: values[2],
      telefone: values[3],
      enterprise: values[4],
      service_option: values[5],
      employees_option: values[6]
    }

    console.log(form);
  };

  useEffect(() => {
    getLanguageFromURL();
    console.log(language);
  }, [language]);


  return (
    <ChatBot
      key={language}
      floating={true}
      floatingIcon={<ChatIcon user={user} />}
      botAvatar={user.profileImage}
      headerTitle={<ChatHeader user={user} />}
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
      bubbleOptionStyle={{ fontSize: '16px' }}
    />
  );
};

export default Chatbot;


