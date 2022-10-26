module.exports = (sequelize,type) => {
    return sequelize.define('Plans',{
        id_plan:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_plan: type.STRING,
        price: type.DOUBLE,
        duration_months: type.INTEGER,
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}