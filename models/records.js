module.exports = (sequelize,type) => {
    return sequelize.define('records',{
        id_record:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        document: type.INTEGER,
        start_date_register: type.DATE,
        end_date_register: type.DATE,
        price: type.DOUBLE,
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}