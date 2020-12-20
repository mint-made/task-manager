const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kupaithomas@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the App ${name}! Let me know how you get on with the app.`,
  });
};

module.exports = {
  sendWelcomeEmail,
};
