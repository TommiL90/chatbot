import emailjs from '@emailjs/browser'
export const sendEmail = (form) => {
  const templateParams = {
    ...form
  }

  emailjs.send('', '', templateParams, '')
  .then((res) => {
    console.log('Email enviado:', res.status, res.text);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
}