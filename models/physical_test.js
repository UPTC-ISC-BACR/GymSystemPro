module.exports = (sequelize,type) => {
    return sequelize.define('physical_test',{
        id_test:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: false
        },
        test_name: type.STRING,
        type: type.STRING
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}