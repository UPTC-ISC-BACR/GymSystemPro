module.exports = (sequelize,type) => {
    return sequelize.define('exercises',{
        id_exercise:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: true
        },
        name_excersice: type.STRING,
        description: type.STRING,
        time: type.TIME,
        repetitions: type.INTEGER,
        weight: type.DOUBLE
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}