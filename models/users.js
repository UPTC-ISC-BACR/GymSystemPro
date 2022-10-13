module.exports = (sequelize,type) => {
    return sequelize.define('usuarios',{
        id_user:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        user_name: type.STRING,
        password: type.STRING,
        type_user: type.STRING,
        document: type.INTEGER
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}