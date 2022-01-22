const fs = require('fs');
const csv = require('csv-parser');
const db = require('./database.js')

const removeQuotes = (string) => { return string.replace(/"+/g, '')}

const addProducts = (csvFile) => {
  fs.readFile(csvFile, 'utf8', function (err,data) {
    if(err) console.log(err);
    let products = [];
    let rows = data.split('\n');
    rows.forEach((row) => {
      let column = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
      let _id = Number(column[0])
      let valueCheck = isNaN(_id)
      if(!valueCheck) {
        let _name = removeQuotes(column[1])
        let _slogan = removeQuotes(column[2])
        let _description = removeQuotes(column[3])
        let _category = removeQuotes(column[4])
        let _default_price = column[5]
         let product = {
           id: _id,
           name: _name,
           slogan: _slogan,
           description: _description,
           category: _category,
           default_price: _default_price
         }
         products.push(product)
      }
    })
     db.addProductsToDatabase(products)
  });
}

const addPhotos = (csvFile) => {
  fs.readFile(csvFile, 'utf8', function (err,data) {
    if(err) console.log(err);
    let photos = [];
    let rows = data.split('\n');
    rows.forEach((row) => {
      console.log('before', row);
      // let column = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
      let column = row.split(',')
      console.log('after', column)
      let _id = Number(column[0])
      let _style_id = Number(column[1])
      let valueCheck = isNaN(_id)
      if(!valueCheck) {
        let _url = removeQuotes(column[2])
        let _thumbnail_url = removeQuotes(column[3])
        let photo = {
          id: _id,
          style_id: _style_id,
          url: _url,
          thumbnail_url: _thumbnail_url
        }
         photos.push(photo)
      }
    })
     db.addPhotoToDatabase(photos)
  });
}











