module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/email',
      handler: 'email.sendContactEmail',
    }
  ]
}