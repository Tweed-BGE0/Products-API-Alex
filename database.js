const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/productOverview');
}

const product2Schema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  default_price: String,
  features: Array
});

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
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
const relatedItemSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  related_product_id: Number
});

const Product2 = mongoose.model('Product2', product2Schema)
const Product = mongoose.model('Product', productSchema)
const Feature = mongoose.model('Feature', featureSchema)
const Style = mongoose.model('Style', styleSchema)
const Photo = mongoose.model('Photo', photoSchema)
const Sku = mongoose.model('Sku', skuSchema)
const RelatedItem = mongoose.model('RelatedItem', relatedItemSchema)


const addProd = (obj) => {
  Product2.insert(obj)
    .then(() => console.log('should be saved'))
    .catch(err => console.log(err))
}

const makeAndSaveProduct = (productId) => {
  Product.find({'id': productId})
  .then((product) => {

    let productObject = product[0];
    productFeatures = [];

    Feature.find({'product_id': productId})
      .then((featuresArray) => {
        featuresArray.forEach((feature) => {
          productFeatures.push({
            'feature' : feature.feature,
            'value': feature.value});
        })

        let combinedProductSchema = {
          id: productObject.id,
          name: productObject.name,
          description: productObject.description,
          category: productObject.category,
          default_price: productObject.default_price,
          features: productFeatures
        }
        console.log(combinedProductSchema)
        addProd(combinedProductSchema)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
}




// Style.find({'product_id': 1})
//   .then((stylesArray) => {
//     stylesArray.forEach((styleObject) => {

//     })


//     console.log('STYLES', stylesArray)})
//   .catch(err => console.log(err))


// Sku.find().limit(2)
//   .then(data => console.log('sku'))
//   .catch(err => console.log(err))
// RelatedItem.find().limit(2)
//   .then(data => console.log('? related--', data))
//   .catch(err => console.log(err))
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

const addPhotoToDatabase = (photos) => {
  Photo.insertMany(photos)
  .then((docs) => {
    console.log('Successfully Added to Mongo')
  }).catch((err) => {
    throw(err)
  })
}

module.exports.addProductToDatabase = addProductToDatabase;
module.exports.addPhotoToDatabase = addPhotoToDatabase;
// module.exports.getProduct = getProduct;
module.exports.makeAndSaveProduct = makeAndSaveProduct;




// const getProduct = (productId) => {
//   Product.find({'id': productId})
//   .then((product) => {
//     let productObject = product[0];
//     productFeatures = [];
//     Feature.find({'product_id': productId})
//       .then((featuresArray) => {
//         featuresArray.forEach((feature) => {
//           productObject.features.push({
//             'feature' : feature.feature,
//             'value': feature.value});
//         })

//         console.log('full object with features', Object.keys(productObject))
//       })
//         .then()
//       .catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))
// }