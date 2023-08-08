// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
});
// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
}),
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false
  },
}),
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
