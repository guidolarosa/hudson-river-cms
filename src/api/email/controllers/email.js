const emailTemplate = {
  subject: 'Welcome Test',
  text: `Welcome to mywebsite.fr!
    Your account is now linked with: Test.`,
  html: `<h1>Welcome to mywebsite.fr!</h1>
    <p>Your account is now linked with: Test.<p>`,
};

await strapi.plugins['email'].services.email.sendTemplatedEmail(
  {
    to: user.email,
    // from: is not specified, the defaultFrom is used.
  },
    emailTemplate,
  {
    user: {
      firstname: 'Guido',
      email: 'guido.glarosa@gmail.com'
    },
  }
);