import WhatsButton from "../components/whattsButton";

export const stepsPt = [
  {
    id: '0',
    message: 'Olá tudo bem? Para que possamos dar início preciso de algumas informações rápidas 🙂',
    trigger: '1',
    delay: 3000
  },
  {
    id: '1',
    message: 'Qual o seu nome completo?',
    trigger: 'name',
    delay: 2000
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
    validator: (value) => {
      if (value.trim() === '') {
        return 'Por favor, insira seu nome completo.';
      }
      return true;
    }

  },
  {
    id: '3',
    message: 'Prazer {previousValue}! 👋🏻',
    trigger: '4',

  },
  {
    id: '4',
    message: 'Em qual e-mail corporativo gostaria de receber a proposta?',
    trigger: 'email',
  },
  {
    id: 'email',
    user: true,
    trigger: '6',
    validator: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      if (!isValid) {
        return 'Por favor, insira um e-mail válido.';
      }
      return true;
    }
  },
  {
    id: '6',
    message: 'Poderia me informar seu telefone? (Prometo não incomodar🙏)',
    trigger: 'telefone',
  },
  {
    id: 'telefone',
    user: true,
    trigger: '8',
    inputAttributes: {
      name: 'phone',
    },
    validator: (value) => {
      const phoneRegex = /^\d{11}$/;
      const isValid = phoneRegex.test(value);

      if (!isValid) {
        return 'Por favor, insira um número de teléfono válido.';
      }

      return true
    }
  },
  {
    id: '8',
    message: 'Legal, estamos quase lá tomas. Para recomendar a melhor solução, preciso conhecer um pouco mais sobre a sua empresa.',
    trigger: '9',
  },
  {
    id: '9',
    message: 'Qual o nome da sua empresa?',
    trigger: 'enterprise',
  },
  {
    id: 'enterprise',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'Que tipo de serviço esta buscando, tomas?',
    trigger: 'serviceOptions',
  },
  {
    id: 'serviceOptions',
    options: [
      { value: '1', label: 'Consultoria e Protopipagem', trigger: '13' },
      { value: '2', label: 'Profissionais de TI', trigger: '13' },
      { value: '3', label: 'Desenvolvimento Web', trigger: '13' },
      { value: '4', label: 'Desenvolvimento Mobile', trigger: '13' },
      { value: '5', label: 'Outsourcing', trigger: '13' },
      { value: '6', label: 'RPA / Automatizaçao de Procesos', trigger: '13' },
    ],
  },
  {
    id: '13',
    message: 'Por último, qual é o número de colaboradores de sua empresa?',
    trigger: 'numberEmployeesOption',
  },
  {
    id: 'numberEmployeesOption',
    options: [
      { value: '1', label: '1 a 9', trigger: 'end-message' },
      { value: '2', label: '10 a 49', trigger: 'end-message' },
      { value: '3', label: '0 a 99', trigger: 'end-message' },
      { value: '4', label: 'Acima de 100', trigger: 'end-message' },
    ],
  },
  {
    id: 'end-message',
    component:(
      <WhatsButton />
    ) ,
    end: true,
  },
]