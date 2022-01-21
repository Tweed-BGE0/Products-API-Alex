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
  default_price: String
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
const relatedProductsSchema = new mongoose.Schema({
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
const RelatedProducts = mongoose.model('RelatedProducts', relatedProductsSchema)

const p = [
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
      "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }];

  let sk =  {
    "1281158": {
        "quantity": 14,
        "size": "7"
    },
    "1281159": {
        "quantity": 25,
        "size": "7.5"
    },
    "1281160": {
        "quantity": 9,
        "size": "8"
    },
    "1281161": {
        "quantity": 2,
        "size": "8.5"
    },
    "1281162": {
        "quantity": 18,
        "size": "9"
    },
    "1281163": {
        "quantity": 12,
        "size": "9.5"
    },
    "1281164": {
        "quantity": 10,
        "size": "10"
    },
    "1281165": {
        "quantity": 18,
        "size": "10.5"
    },
    "1281166": {
        "quantity": 11,
        "size": "11"
    },
    "1281167": {
        "quantity": 35,
        "size": "11.5"
    },
    "1281168": {
        "quantity": 25,
        "size": "12"
    }
 }


// DATABASE QUERIES
const getAllProducts = (page = 1, count = 5) => {
  //TODO function do populate low and high value based on input count and page
  let lowVal = 3;
  let highVal = 5;
  return Product.find({id: {$gt: lowVal, $lt: highVal} })
  .then(products =>  products)
  .catch(err => err)
}

const getProductById = (productId) => {
  return BasicProduct.find({'id': productId})
  .then(product =>  product)
  .catch(err => err)
}


const getStylesById = (productId) => {
  return Style.find({'product_id': productId})
  .then((arrayOfStyleObjects) =>  {
    let responseToServer = {
      "product_id": productId,
      "results": []
    };

    arrayOfStyleObjects.forEach((style) => {
      let formattedStyleObject = {
        style_id: style.id,
        name: style.name,
        original_price: style. original_price,
        sale_price: style.sale_price,
        default: true,
        photos: p,
        skus: {}
      }

    // Sku.find({style_id: style.id})
    //   .then((skusArray) => {
    //     skusArray.forEach((sku) => {

    //       formattedStyleObject.skus[PartseInt(sku.id)] =  {
    //         'quantity': sku.quantity,
    //         'size': sku.size
    //       }

    //     })
    //     console.log('skus',formattedStyleObject.skus)
    //   })
    //   .catch(err => err)
      formattedStyleObject.skus = sk
      responseToServer.results.push(formattedStyleObject)
    })

    return responseToServer;
  })
  .catch(err => err)
}

// Photo.find({styleId: style.id})
// .then((photosArray) => {
// })



const getRelatedById = (productId) => {
  let relatedArray = [];
  return RelatedProducts.find({product_id: productId})
  .then((products) =>  {
    products.forEach((prod) => {
      console.log(prod)
      relatedArray.push(prod.related_product_id)
    })
    return relatedArray
  })
  .catch(err => err)
}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;
module.exports.getStylesById = getStylesById;
module.exports.getRelatedById = getRelatedById;
module.exports.addProductsToDatabase = (products) => {
  Product.insertMany(products)
  .catch((err) => {
    throw(err)
  })
}






