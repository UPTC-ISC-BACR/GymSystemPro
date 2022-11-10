module.exports = (sequelize,type) => {
    return sequelize.define('fertilizers_Histories',{
        id_fertilizes:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: type.INTEGER,
        date_fertilizers: type.DATE,
        id_invoice: type.INTEGER,
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}