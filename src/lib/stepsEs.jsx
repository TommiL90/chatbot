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
    message: '¿Podrías proporcionarme tu número de teléfono? (Prometo no molestar🙏)',
    trigger: 'telefone'
  },
  {
    id: 'telefone',
    user: true,
    trigger: '8',
    validator: (value) => {
      const phoneRegex = /^\d{11}$/;
      const isValid = phoneRegex.test(value);

      if (!isValid) {
        return 'Por favor, ingresa un número de teléfono válido.';
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
      { value: '1', label: 'Consultoría y Prototipado', trigger: '13' },
      { value: '2', label: 'Profesionales de TI', trigger: '13' },
      { value: '3', label: 'Desarrollo Web', trigger: '13' },
      { value: '4', label: 'Desarrollo Móvil', trigger: '13' },
      { value: '5', label: 'Outsourcing', trigger: '13' },
      { value: '6', label: 'RPA / Automatización de Procesos', trigger: '13' },
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
      { value: '1', label: '1 a 9', trigger: 'end-message' },
      { value: '2', label: '10 a 49', trigger: 'end-message' },
      { value: '3', label: '0 a 99', trigger: 'end-message' },
      { value: '4', label: 'Más de 100', trigger: 'end-message' },
    ]
  },
  {
    id: 'end-message',
    message: '¡Gracias! ¡Tus datos se enviaron exitosamente!',
    end: true
  },
];
