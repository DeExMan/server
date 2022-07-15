// const sequelize = require('../db')
// const {DataTypes} = require('sequelize')
// const {Basket, Rating} = require('./models')
// const {RoleModel, UserRoleModel} = require('./userRole-model')
// const {TokenModel} = require('./token-model')

// const UserModel = sequelize.define('user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     email: {type: DataTypes.STRING, unique: true, allowNull: false},
//     password: {type: DataTypes.STRING, allowNull: false},
//     isActivated: {type: DataTypes.BOOLEAN, defaultValue: false, },
//     activationLink: {type: DataTypes.STRING, },
// })


// UserModel.hasOne(Basket)
// Basket.belongsTo(UserModel)

// UserModel.hasOne(TokenModel)
// TokenModel.belongsTo(UserModel)

// UserModel.hasMany(Rating)
// Rating.belongsTo(UserModel)

// UserModel.belongsToMany(RoleModel, {through: UserRoleModel})
// RoleModel.belongsToMany(UserModel, {through: UserRoleModel})

// module.exports = {UserModel}