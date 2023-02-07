const {DataTypes} = require('sequelize');
const User = require('./UserModel');

class Admin extends User{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            sequelize: connection
        })
    }
}
module.exports = Admin;