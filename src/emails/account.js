const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kupaithomas@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the App ${name}! Let me know how you get on with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kupaithomas@gmail.com',
    subject: 'We are sorry to see you leave.',
    text: `We are sorry to see you leave ${name}. Is there anything we can do to help before you go?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
