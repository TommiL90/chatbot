import emailjs from '@emailjs/browser'
export const sendEmail = (form) => {
  const templateParams = {
    ...form
  }

  emailjs.send('service_fvsnain', 'template_ux11ptx', templateParams, 'ctiFWSfKO8p2xnXjq')
  .then((res) => {
    console.log('Email enviado:', res.status, res.text);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
}