const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/productOverview');
}

//SCHEMAS
const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: Array
});
const BasicProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String
});
const featureSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});
const styleSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
  sale_price: Number,
  original_price: Number,
  default_styledrop: Number
});
const photoSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  url: String,
  thumbnail_url: String
})
const skuSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  size: String,
  quantity: Number
});
const relatedSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  related_product_id: Number
});

//MODELS
const Product = mongoose.model('Product', ProductSchema)
const BasicProduct = mongoose.model('BasicProduct', BasicProductSchema)
const Feature = mongoose.model('Feature', featureSchema)
const Style = mongoose.model('Style', styleSchema)
const Photo = mongoose.model('Photo', photoSchema)
const Sku = mongoose.model('Sku', skuSchema)
const Related = mongoose.model('Related', relatedSchema)

// DATABASE QUERIES
const getAllProducts = (page = 1, count = 5) => {
  //TODO function do populate low and high value based on input count and page
  let lowVal = 1;
  let highVal = 5;
  return BasicProduct.find({id: {$gt: lowVal, $lt: highVal} });
  .then(products =>  products)
  .catch(err => err)
}
const getProductById = (productId) => {
  return Product.find({'id': productId})
  .then(product =>  product)
  .catch(err => err)
}
const getStylesById = (productId) => {
  return Style.find({'product_id': productId})
  .then(relatedIds =>  relatedIds)
  .catch(err => err)
}
const getRelatedById = (productId) => {
  return Related.find({'product_id': productId})
  .then(styles =>  console.log(styles))
  .catch(err => err)
}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;
module.exports.getStylesById = getStylesById;
module.exports.getRelatedById = getRelatedById;
