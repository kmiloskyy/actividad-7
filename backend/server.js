const express = require('express')
const servicios = require('./data/servicios')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor de empresa funcionando correctamente')
})

app.get('/api/servicios', (req, res) => {

  const categoria = req.query.categoria

  if (categoria) {

    const resultado = servicios.filter(
      servicio =>
        servicio.categoria.toLowerCase() ===
        categoria.toLowerCase()
    )

    return res.json(resultado)
  }

  res.json(servicios)
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})