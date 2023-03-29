const { createCoreController } = require('@strapi/strapi').factories;

const emailTemplate = {
  subject: 'Welcome Test',
  text: `Welcome to mywebsite.fr!
    Your account is now linked with: Test.`,
  html: `<h1>Welcome to mywebsite.fr!</h1>
    <p>Your account is now linked with: Test.<p>`,
};

module.exports = createCoreController('api::email.email', ({ strapi }) =>  ({
  async sendContactEmail(ctx) {
    await strapi.plugins['email'].services.email.sendTemplatedEmail(
      {
        to: 'guido.glarosa@gmail.com',
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

    return { };

  }
}));
