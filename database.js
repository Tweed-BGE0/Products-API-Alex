const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/productOverview');
}


const featureSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});
const skuSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  size: String,
  quantity: Number
});
const relatedItemSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  related_product_id: Number
});
const styleSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
  sale_price: Number,
  original_price: Number,
  default_styledrop: Number
});
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  default_price: String


});
const photoSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  url: String,
  thumbnail_url: String
})


const Feature = mongoose.model('Feature', featureSchema)
const Sku = mongoose.model('Sku', skuSchema)
const RelatedItem = mongoose.model('RelatedItem', relatedItemSchema)
const Style = mongoose.model('Style', styleSchema)
const Product = mongoose.model('Product', productSchema)
const Photo = mongoose.model('Photo', photoSchema)

// Feature.find().limit(2)
//   .then(data => console.log('feature'))
//   .catch(err => console.log(err))
// Sku.find().limit(2)
//   .then(data => console.log('sku'))
//   .catch(err => console.log(err))
// RelatedItem.find().limit(2)
//   .then(data => console.log('? related--', data))
//   .catch(err => console.log(err))
// Style.find().limit(2)
//   .then(data => console.log('style'))
//   .catch(err => console.log(err))
// Product.find().limit(2)
// .then(data => console.log(data))
// .catch(err => console.log(err))
// Photo.find().limit(2)
// .then(data => console.log('Photo'))
// .catch(err => console.log(err))


const addProductToDatabase = (products) => {
  Product.insertMany(products)
  .then((docs) => {
    console.log('Successfully Added to Mongo')
  }).catch((err) => {
    throw(err)
  })
}

module.exports.addProductToDatabase = addProductToDatabase;


