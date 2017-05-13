const page = require('page')

page('/', () => {
  const main = document.getElementById('main-container')
  main.innerHTML = '<a href="/signup">Sign Up</a>'
})
