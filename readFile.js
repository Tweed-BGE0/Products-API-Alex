const fs = require('fs');
const csv = require('csv-parser');
const db = require('./database.js')

const removeQuotes = (string) => { return string.replace(/"+/g, '')}

//Async split csv into smaller files. contain all within same directory
// fs.split -l 1000 product.csv new


fs.readdir(`${__dirname}/products`, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach((file) => {
      addProd(`${__dirname}/products/${file}`);
    })
  }
})


// FORMAT PRODUCT DATA AND ADD TO DB
const addProd = (csvFile) => {
  fs.readFile(csvFile, 'utf8', function (err,data) {

    if(err) console.log(err);
    let products = [];

    let rows = data.split('\n');
    // rows = rows.slice(1);

    rows.forEach((row) => {

      let column = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)

      // if(!readHeader) {
      //   readHeader = true;
      // }
      // if(column[0] === 'id' || column[0] === NaN) column[0] = 0;
      // if(column[5] === 'default_price'|| column[0] === NaN) column[5] = '0';
      let _id = Number(column[0])
      let valueCheck = isNaN(_id)

      if(!valueCheck) {
        let _name = removeQuotes(column[1])
        let _slogan = removeQuotes(column[2])
        let _description = removeQuotes(column[3])
        let _category = removeQuotes(column[4])
        let _default_price = column[5]
        //  var default_price = column[5].replace(‘“default_price”: ‘, ‘’)
        // let _default_price = split(column[5]).replace('"default_price": ','');
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
     db.addProductToDatabase(products)
  });

}



