const page = require('page')
const empty = require('empty-element')
const title = require('title')
const template = require('./template')

page('/signin', () => {
  title('Platzigram - Signin')
  const main = document.getElementById('main-container')
  empty(main).appendChild(template)
})
