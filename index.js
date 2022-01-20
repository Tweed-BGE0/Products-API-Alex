const express = require('express')
const app = express()
const port = 3070
const db = require('./database.js')

app.get('/', (req, res) => {
  res.send('Please visit a valid endpoint')
  //HANDLE ERRORS? 300, 400, 500
})


app.get('/products', (req, res) => {
  console.log(req.params)
//accept page, count eventually
db.getAllProducts()
  .then((allProducts) => {
    console.log('great success - ')
    res.send(allProducts)
  })
  .catch((err) => {
    res.status(400).json({error: err})
  })

})


app.get('/products/:product_id', (req, res) => {
  console.log('request object', req.params)

  let productId = req.params.product_id;
  db.getProductById(productId)
    .then((product) => {
      console.log('great success - ')
      res.send(product)
    })
    .catch((err) => {
      res.status(400).json({error: err})
    })
})

app.get('/products/:product_id/styles', (req, res) => {
  console.log('request recieved for styles')
  let productId = req.params.product_id;
  db.getStylesById(productId)
    .then((styles) => {
      console.log('great success - ')
      res.send(styles)
    })
    .catch((err) => {
      res.status(400).json({error: err})
    })

})

app.get('/products/:product_id/related', (req, res) => {
  console.log('request recieved for related products')
  let productId = req.params.product_id;
  db.getRelatedById(productId)
    .then((relatedIds) => {
      console.log('great success - ', relatedIds)
      res.send(relatedIds)
    })
    .catch((err) => {
      res.status(400).json({error: err})
    })
})


app.listen(port, () => {
  console.log(`Listening on ${port}`)
})