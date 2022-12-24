const { DataTypes } = require('sequelize')
const sequelize = require('../configs/db')
const Brand = require('./brandsModel')
const Category = require('./categoriesModel')

const Product = sequelize.define(
    'products',
    {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false, validate: { min: 3, max: 250 } },
        image_main: { type: DataTypes.STRING, allowNull: false },
        saleId: { type: DataTypes.UUID, allowNull: true, references: { model: 'sales', key: 'id' } }, //boshqa table
        rewiesId: { type: DataTypes.UUID, allowNull: true, references: { model: 'reviews', key: 'id' } }, //boshqa table
        productDetailId: { type: DataTypes.UUID, allowNull: false, references: { model: 'productDetails', key: 'id' } }, //boshqa table
        categoryId: { type: DataTypes.UUID, allowNull: false, references: { model: 'categories', key: 'id' } },
        categoryLittleId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: { model: 'categoryLittles', key: 'id' },
        },
        views: { type: DataTypes.INTEGER, defaultValue: 1 },
        brandId: { type: DataTypes.UUID, allowNull: false, references: { model: 'brands', key: 'id' } },
    },
    { timestamps: true, createdAt: true, updatedAt: false }
)

Category.hasMany(Product)
Product.belongsTo(Category)

Brand.hasMany(Product)
Product.belongsTo(Brand)

module.exports = Product