import { WhattsButton } from "../components/WhattsButton";


export const stepsEn = [
  {
    id: '0',
    message: 'Hello, how are you? To get started, I need some quick information 🙂',
    trigger: '1',
    delay: 3000
  },
  {
    id: '1',
    message: 'What is your full name?',
    trigger: 'name',
    delay: 2000
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
    validator: (value) => {
      if (value.trim() === '') {
        return 'Please enter your full name.';
      }
      return true;
    }
  },
  {
    id: '3',
    message: 'Nice to meet you, {previousValue}! 👋🏻',
    trigger: '4'
  },
  {
    id: '4',
    message: 'In which corporate email would you like to receive the proposal?',
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
        return 'Please enter a valid email.';
      }
      return true;
    }
  },
  {
    id: '6',
    message: 'Could you provide me with your phone number?.  Include the country code and use only digits (I promise not to bother you 🙏)',
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
        return 'Please enter a valid phone number.';
      }

      return true;
    }
  },
  {
    id: '8',
    message: "Great, we're almost there. To recommend the best solution, I need to know a bit more about your company.",
    trigger: '9'
  },
  {
    id: '9',
    message: 'What is the name of your company?',
    trigger: 'enterprise'
  },
  {
    id: 'enterprise',
    user: true,
    trigger: '11'
  },
  {
    id: '11',
    message: 'What type of service are you looking for, tomas?',
    trigger: 'serviceOptions'
  },
  {
    id: 'serviceOptions',
    options: [
      { value: 'Consultoria e Protopipagem', label: 'Consulting and Prototyping', trigger: '13' },
      { value: 'Profissionais de TI', label: 'IT Professionals', trigger: '13' },
      { value: 'Desenvolvimento Web', label: 'Web Development', trigger: '13' },
      { value: 'Desenvolvimento Mobile', label: 'Mobile Development', trigger: '13' },
      { value: 'Outsourcing', label: 'Outsourcing', trigger: '13' },
      { value: 'RPA / Automatizaçao de Procesos', label: 'RPA / Process Automation', trigger: '13' },
    ]
  },
  {
    id: '13',
    message: 'Finally, how many employees does your company have?',
    trigger: 'numberEmployeesOption'
  },
  {
    id: 'numberEmployeesOption',
    options: [
      { value: '1 a 9', label: '1 to 9', trigger: 'end-message' },
      { value: '10 a 49', label: '10 to 49', trigger: 'end-message' },
      { value: '50 a 99', label: '50 to 99', trigger: 'end-message' },
      { value: 'Acima de 100', label: 'Above 100', trigger: 'end-message' },
    ]
  },
  {
    id: 'end-message',
    component: (
      <WhattsButton 
      textContainer={'Thank you for the information! Soon, one of our executives will contact you to present the best solution for your company 🤝. If you prefer, you can also start a conversation by clicking below 👇.'} 
      textButton={'Hablar por Whattsapp'} 
      href={`https://api.whatsapp.com/send?phone=+119162502674&text=Hello,%20I%20come%20through%20your%20website,%20I%20would%20like%20to%20know%20more%20about%20your%20services
      `} />
    ),
    end: true
  },
];


export const botMessagesEn = [
  'Want to know how we help companies like yours? 😄',
  'Do you need help finding the best solution for your business?'
];
