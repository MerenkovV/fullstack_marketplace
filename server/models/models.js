const sequelize = require('../db')
const {DataTypes, STRING, INTEGER} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: STRING, unique: true},
    password: {type: STRING},
    role: {type: STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: INTEGER, allowNull: false}
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, unique: true, allowNull: false},
    price: {type: INTEGER, allowNull: false},
    rating: {type: INTEGER, allowNull: false, defaultValue: 0},
    img: {type: STRING, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: STRING, unique: true, allowNull: false},
})

const BrandType = sequelize.define('brand_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Type.belongsToMany(Brand, {through: BrandType})
Brand.belongsToMany(Type, {through: BrandType})

module.exports = {
    User,
    Basket,
    BasketDevice,
    Rating,
    Device,
    DeviceInfo,
    Type,
    Brand,
    BrandType
}