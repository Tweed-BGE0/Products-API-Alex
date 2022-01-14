const fs = require('fs');
const csv = require('csv-parser');
const db = require('./database.js')

const removeQuotes = (string) => { return string.replace(/"+/g, '')}

// FORMAT PRODUCT DATA AND ADD TO DB
  //ONLY NEED TO RUN ONCE
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

//TO ADD PRODUCTS FROM CSV TO DB 1MM ITEMS
// addProducts('/Users/alexanderhuerta/hr/sdc/data/product.csv')

//TO
// db.joinProductAndFeatures(1)

// const numberOfProducts = 1000010;

// 1000011
// 1


for(let i = 1; i <100000 ; i++) {

  db.joinProductAndFeatures(i)
}
console.log('done with 1,000,011')



//FORMAT PHOTO FILE AND ADD TO DB
// const addPhotos = (csvFile) => {
//   fs.readFile(csvFile, 'utf8', function (err,data) {

//     if(err) console.log(err);
//     let photos = [];
//     let rows = data.split('\n');

//     rows.forEach((row) => {
//       console.log('before', row);
//       // let column = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
//       let column = row.split(',')
//       console.log('after', column)
//       let _id = Number(column[0])
//       let _style_id = Number(column[1])
//       let valueCheck = isNaN(_id)
//       if(!valueCheck) {

//         let _url = removeQuotes(column[2])
//         let _thumbnail_url = removeQuotes(column[3])


//          let photo = {
//            id: _id,
//            style_id: _style_id,
//            url: _url,
//            thumbnail_url: _thumbnail_url

//          }
//          photos.push(photo)
//       }

//     })
//      db.addPhotoToDatabase(photos)
//   });
// }
// addPhotos('/Users/alexanderhuerta/hr/sdc/Products-API-Alex/photos/2.csv')







//SPLIT LARGE FILE INTO SMALL FILES IN SAME DIRECTORY AND LOOP THROUGH, READING EACH
// fs.split -l 1000 product.csv new

// fs.readdir(`${__dirname}/products`, (err, files) => {
//   if (err)
//     console.log(err);
//   else {
//     files.forEach((file) => {
//       addProducts(`${__dirname}/products/${file}`);
//     })
//   }
// })