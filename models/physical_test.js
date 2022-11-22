module.exports = (sequelize,type) => {
    return sequelize.define('physical_tests',{
        id_test:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: true
        },
        test_name: type.STRING,
        type: type.STRING
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}