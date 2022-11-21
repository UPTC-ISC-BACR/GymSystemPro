module.exports = (sequelize,type) => {
    return sequelize.define('test_history',{
        id_test_history:{
            type: type.INTEGER,
            primaryKey: true,   
            autoIncrement: false
        },
        rm_result: type.STRING,
        test_date: type.DATE,
        id_test: type.INTEGER,
        document: type.INTEGER,
        time_result: type.TIME  ,
        repetitions_result: type.INTEGER
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}