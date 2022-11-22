module.exports = (sequelize,type) => {
    return sequelize.define('historical_body_data',{
        id_body_data:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: true
        },
        date_data: type.DATE,
        porc_muscle_mass: type.DECIMAL,
        porc_masa_grasa: type.DECIMAL,
        porc_water: type.DOUBLE,
        document: type.INTEGER
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}