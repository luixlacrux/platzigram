const page = require('page')
const empty = require('empty-element')
const template = require('./template')

page('/signin', () => {
  const main = document.getElementById('main-container')
  empty(main).appendChild(template)
})
