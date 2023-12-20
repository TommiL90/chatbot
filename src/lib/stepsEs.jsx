import WhatsButton from "../components/WhattsButton";

export const stepsEs = [
  {
    id: '0',
    message: 'Hola, ¿cómo estás? Para comenzar, necesito algunas informaciones rápidas 🙂',
    trigger: '1',
    delay: 3000
  },
  {
    id: '1',
    message: '¿Cuál es tu nombre completo?',
    trigger: 'name',
    delay: 2000
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
    validator: (value) => {
      if (value.trim() === '') {
        return 'Por favor, ingresa tu nombre completo.';
      }
      return true;
    }
  },
  {
    id: '3',
    message: '¡Mucho gusto {previousValue}! 👋🏻',
    trigger: '4'
  },
  {
    id: '4',
    message: '¿En qué correo corporativo te gustaría recibir la propuesta?',
    trigger: 'email'
  },
  {
    id: 'email',
    user: true,
    trigger: '6',
    validator: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      if (!isValid) {
        return 'Por favor, ingresa un correo electrónico válido.';
      }
      return true;
    }
  },
  {
    id: '6',
    message: '¿Podrías proporcionarme tu número de teléfono?. Incluya el código de país y solo use dígitos (Prometo no molestar 🙏)',
    trigger: 'telefone'
  },
  {
    id: 'telefone',
    user: true,
    trigger: '8',
    validator: (value) => {
      const phoneRegex = /^\d{1,15}$/;
      const isValid = phoneRegex.test(value);

      if (!isValid) {
        return 'Por favor, insira um número de telefone válido.';
      }

      return true;
    }
  },
  {
    id: '8',
    message: 'Bien, estamos casi allí. Para recomendar la mejor solución, necesito conocer un poco más sobre tu empresa.',
    trigger: '9'
  },
  {
    id: '9',
    message: '¿Cuál es el nombre de tu empresa?',
    trigger: 'enterprise'
  },
  {
    id: 'enterprise',
    user: true,
    trigger: '11'
  },
  {
    id: '11',
    message: '¿Qué tipo de servicio estás buscando, tomas?',
    trigger: 'serviceOptions'
  },
  {
    id: 'serviceOptions',
    options: [
      { value: 'Consultoria e Protopipagem', label: 'Consultoría y Prototipado', trigger: '13' },
      { value: 'Profissionais de TI', label: 'Profesionales de TI', trigger: '13' },
      { value: 'Desenvolvimento Web', label: 'Desarrollo Web', trigger: '13' },
      { value: 'Desenvolvimento Mobile', label: 'Desarrollo Móvil', trigger: '13' },
      { value: 'Outsourcing', label: 'Outsourcing', trigger: '13' },
      { value: 'RPA / Automatizaçao de Procesos', label: 'RPA / Automatización de Procesos', trigger: '13' },
    ]
  },
  {
    id: '13',
    message: 'Por último, ¿cuántos colaboradores tiene tu empresa?',
    trigger: 'numberEmployeesOption'
  },
  {
    id: 'numberEmployeesOption',
    options: [
      { value: '1 a 9', label: '1 a 9', trigger: 'end-message' },
      { value: '10 a 49', label: '10 a 49', trigger: 'end-message' },
      { value: '50 a 99', label: '50 a 99', trigger: 'end-message' },
      { value: 'Acima de 100', label: 'Más de 100', trigger: 'end-message' },
    ]
  },
  {
    id: 'end-message',
    component:(
      <WhatsButton
      textContainer={'¡Gracias por la información! Pronto, uno de nuestros ejecutivos se pondrá en contacto contigo para presentar la mejor solución para tu empresa 🤝. Si prefieres, también puedes iniciar una conversación haciendo clic abajo 👇.'} 
      textButton={'Hablar por Whattsapp'} 
      href={`https://api.whatsapp.com/send?phone=+19162502674&text=Hola,%20vengo%20a%20trav%C3%A9s%20de%20tu%20sitio%20web,%20me%20gustar%C3%ADa%20conocer%20mejor%20tus%20servicios
      `}/>
    ) ,
    end: true
  },
];


export const botMessagesEs = [
  '¿Quieres saber cómo ayudamos a empresas como la tuya? 😄',
  '¿Necesitas ayuda para encontrar la mejor solución para tu empresa?'
];
