module.exports = (sequelize,type) => {
    return sequelize.define('persons',{
        document:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        name: type.STRING,
        last_name: type.STRING,
        date_of_birth: type.DATE,
        email: type.STRING,
        cell_phone: type.STRING,
        type_document:type.STRING,
        gender: type.STRING
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}