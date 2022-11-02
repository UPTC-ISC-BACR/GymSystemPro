module.exports = (sequelize,type) => {
    return sequelize.define('plan_records',{
        start_date_plan: type.DATE,
        end_date_plan: type.DATE,
        id_record: {
            type: type.INTEGER,
            primaryKey: true,
          },
        id_plan: {
            type: type.INTEGER,
            primaryKey: true,
          },
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}