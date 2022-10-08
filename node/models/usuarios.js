const { INTEGER } = require("sequelize")
const { DataTypes } = require( "sequelize")

module.exports = (sequelize,type) => {
    return sequelize.define('users',{
        id_user:{type:DataTypes.INTEGER, primaryKey: true,},
        user_name: {type:DataTypes.STRING},
        password: {type:DataTypes.STRING},
        type_user: {type:DataTypes.STRING},
        document: {type:DataTypes.INTEGER}
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}