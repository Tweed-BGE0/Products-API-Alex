const express = require('express')
const app = express()
const port = 3070
const db = require('./database.js')

app.get('/', (req, res) => {
  res.send('Please visit a valid endpoint')
})

app.get('/products', (req, res) => {
db.getAllProducts()
  .then((allProducts) => {
    res.send(allProducts)
  })
  .catch((err) => {
    res.status(400).json({error: err})
  })
})

app.get('/products/:product_id', (req, res) => {
  let productId = req.params.product_id;
  db.getProductById(productId)
    .then((product) => {
      res.send(product)
    })
    .catch((err) => {
      res.status(400).json({error: err})
    })
})

app.get('/products/:product_id/styles', (req, res) => {
  let productId = req.params.product_id;
  db.getStylesById(productId)
    .then((styles) => {
      res.send(styles)
    })
    .catch((err) => {
      res.status(400).json({error: err})
    })
})

app.get('/products/:product_id/related', (req, res) => {
  let productId = req.params.product_id;
  db.getRelatedById(productId)
    .then((relatedIds) => {
      res.send(relatedIds)
    })
    .catch((err) => {
      res.status(400).json({error: err})
    })
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

