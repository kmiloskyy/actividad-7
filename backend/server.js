const express = require('express')
const servicios = require('./data/servicios')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Servidor de empresa funcionando correctamente')
})

app.get('/api/servicios', (req, res) => {
  res.json(servicios)
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})