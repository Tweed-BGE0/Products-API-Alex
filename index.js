const express = require('express')
const app = express()
const port = 3070
const db = require('./database.js')


// REQUEST FOR PRODUCTS
  //PARAMS
   // PAGE integer	Selects the page of results to return. Default 1.
   // COUNT integer	Specifies how many results per page to return. Default 5.
app.get('/products', (req, res) => {
  res.send('/200 -SEND ENTIRE BASICPRODUCT COLLECTION')
  //HANDLE ERRORS? 300, 400, 500
})




//REQUEST FOR PRODUCT INFORMATION
  //PARAMS -REQUREED-  PRODUCT ID (PRODUCTS COLLECTION)
app.get('/products/:product_id', (req, res) => {
  res.send('200-SEND DOCUMENT FROM PRODUCT COLLECTION THAT MATCHES ID')
    //HANDLE ERRORS 300, 400, 500

})

app.get('/products/:product_id/styles', (req, res) => {
  res.send('200- SEND DOCUMENT FROM X COLLECTION THAT MATCHES ID')
      //HANDLE ERRORS 300, 400, 500

})

app.get('/products/:product_id/related', (req, res) => {
  res.send('200- SEND DOCUMENT FROM RELATED COLLECTION THAT MATCHES ID')
  //HANDLE ERRORS 300, 400, 500
})





app.listen(port, () => {
  console.log(`Listening on ${port}`)
})