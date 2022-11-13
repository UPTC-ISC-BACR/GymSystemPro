module.exports = (sequelize,type) => {
    return sequelize.define('plan_records',{
        id_plan_record: {
            type: type.INTEGER,
            primaryKey: true,
          },
        start_date_plan: type.DATE,
        end_date_plan: type.DATE,
        id_record: type.INTEGER,
        id_plan: type.INTEGER,
        is_active: type.BOOLEAN,
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}