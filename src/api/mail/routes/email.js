module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/email',
      handler: 'email.sendContactEmail',
    }
  ]
}