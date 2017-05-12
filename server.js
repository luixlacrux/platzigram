const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, (err) => {
  if (err) return console.log('hubo un error'), process.exit(1)
  console.log('Platzigram escuchando en el puerto 3000')
})