module.exports = (sequelize,type) => {
    return sequelize.define('list_exercises',{
        id_exercise:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: false
        },
        id_test:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: false
        }
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}