const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(connection){
        super.init({
            userId: DataTypes.INTEGER,
            password: DataTypes.STRING
        },
        {
            sequelize: connection
        })
    }
}
module.exports = User;