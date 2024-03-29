const { Model, DataTypes} = require('sequelize');

class Users extends Model {
    static init(connection){
      super.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
       firstName:{
        type: DataTypes.STRING(50),
        allowNull: false,
       },
       lastname:{
        type: DataTypes.STRING(50),
        allowNull: false,
       },
       email:{
        type: DataTypes.STRING(50),
        allowNull: false,
       },
       password:{
        type: DataTypes.STRING(50),
        allowNull: false,
       },
       files:{
        type: DataTypes.STRING(50),
        allowNull: false,
       },
       companyId: {
        type: DataTypes.STRING(50),
        allowNull: false,
       }
      },
      {
        sequelize:connection,
        timestamps:true,
        tableName:'users'
      }
      )
    }
  };
  module.exports = Users;