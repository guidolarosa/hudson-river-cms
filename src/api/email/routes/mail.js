module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/mail',
      handler: 'mail.sendContactMail',
    }
  ]
}