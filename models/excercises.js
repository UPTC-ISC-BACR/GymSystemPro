module.exports = (sequelize,type) => {
    return sequelize.define('exercises',{
        id_exercise:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: true
        },
        name_excersice: type.STRING,
        description: type.STRING,
        time: type.STRING,
        repetitions: type.STRING,
        weight: type.STRING
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}