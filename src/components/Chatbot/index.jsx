/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ChatBot from 'react-simple-chatbot';
import { steps } from '../../constants/steps';
import { ChatIcon } from '../ChatIcon';
import { ChatHeader } from '../ChatHeader';


const SimpleForm = () => {

  const user = {
    name: 'Thiago',
    profileImage: 'https://avatars.githubusercontent.com/u/108248835?v=4',
  };

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

    console.log(form)

  };

  return (
    <ChatBot
      floating={true}
      floatingIcon={<ChatIcon user={user} />}
      botAvatar='https://avatars.githubusercontent.com/u/108248835?v=4'
      headerTitle={<ChatHeader user={user} />}
      steps={steps}
      handleEnd={handleEnd}
    />
  );
};

export default SimpleForm;
