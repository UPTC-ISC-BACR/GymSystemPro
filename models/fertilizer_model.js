module.exports = (sequelize,type) => {
    return sequelize.define('fertilizers_History',{
        id_fertilizes:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: type.STRING,
        date_fertilizers: type.STRING,
        id_invoice: type.INTEGER,
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}