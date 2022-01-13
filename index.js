const express = require('express')
const app = express()
const port = 3070
const db = require('./database.js')


app.get('/', (req, res) => {
  res.send('Welcome to Alexanders Product Catalogue API')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})