module.exports = (sequelize,type) => {
    return sequelize.define('personas',{
        documento:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        fecha_nacimiento: type.DATE,
        correo: type.STRING,
        telefono: type.STRING,
        estado: type.STRING,
        tipo_documento:type.STRING
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}