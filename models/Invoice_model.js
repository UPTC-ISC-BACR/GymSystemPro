module.exports = (sequelize,type) => {
    return sequelize.define('Invoices',{
        id_invoice:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        generation_date: type.DATE,
        total_value: type.INTEGER,
        balance: type.INTEGER,
        invoiced_period: type.STRING,
        id_record: type.INTEGER
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}