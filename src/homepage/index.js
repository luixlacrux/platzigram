const page = require('page')
const empty = require('empty-element')
const title = require('title')
const template = require('./template')

page('/', () => {
  title('Platzigram')
  const main = document.getElementById('main-container')
  const pictures = [
    {
      user: {
        username: 'luixlacrux',
        avatar: 'https://lh3.googleusercontent.com/-fVs6EEF_W1c/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF5QVr4dASSWTqRGmskrn9WO3JDSfw/s32-c-mo/photo.jpg'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true
    },
    {
      user: {
        username: 'luixlacrux',
        avatar: 'https://lh3.googleusercontent.com/-fVs6EEF_W1c/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF5QVr4dASSWTqRGmskrn9WO3JDSfw/s32-c-mo/photo.jpg'
      },
      url: 'office.jpg',
      likes: 4,
      liked: true
    }
  ]
  empty(main).appendChild(template(pictures))
})
