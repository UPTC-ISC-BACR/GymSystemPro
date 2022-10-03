module.exports = (sequelize,type) => {
    return sequelize.define('usuarios',{
        id_usuario:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        nombre_usuario: type.STRING,
        password: type.STRING,
        tipo_usuario: type.STRING,
        documento: type.INTEGER
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}