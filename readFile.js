const fs = require('fs');
const csv = require('csv-parser');
const db = require('./database.js')

const removeQuotes = (string) => { return string.replace(/"+/g, '')}

//product folder
//split procudct csv into smaller files -----     split -l 1000 product.csv new
//iterate over folder-- at each file, run fn below


// FORMAT PRODUCT DATA AND ADD TO DB
fs.readFile('/Users/alexanderhuerta/hr/sdc/Products-API-Alex/sample.csv', 'utf8', function (err,data) {
  if(err) console.log(err);
  let products = [];
  let rows = data.split('\n');

  rows=rows.slice(1);
  rows.forEach((row) => {
    let column = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
    //  if(column[0] === 'id') column[0] = 0;
    //  if(column[5] === 'default_price') column[5] = '0';
     let _id = parseInt(column[0]);
     let _name = removeQuotes(column[1])
     let _slogan = removeQuotes(column[2])
     let _description = removeQuotes(column[3])
     let _category = removeQuotes(column[4])
     let _default_price = parseInt(column[5])

     let product = {
       id: _id,
       name: _name,
       slogan: _slogan,
       description: _description,
       category: _category,
       default_price: _default_price
     }
     products.push(product)
  })
   db.addFeatureToDatabase(products)
});



