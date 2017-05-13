const page = require('page')

const main = document.getElementById('container')

page('/', () => {
  main.innerHTML = 'Home <a href="/signup">signup</a>'
})

page('/signup', () => {
  main.innerHTML = 'Sign Up <a href="/asdasd">Home</a>'
})

page()
