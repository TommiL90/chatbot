import emailjs from '@emailjs/browser'
export const sendEmail = (form) => {
  const templateParams = {
    ...form
  }

  emailjs.send('service_1s5rhiu', 'template_34p9inb', templateParams, 's0CBN3UCPCSJNhoV6')
  .then((res) => {
    console.log('Email enviado:', res.status, res.text);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
}