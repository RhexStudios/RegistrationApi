const {DataTypes} = require('sequelize');
const User = require('./UserModel');

class Customer extends User{
    static init(connection){
        super.init({
           email: DataTypes.STRING,
           street: DataTypes.STRING,
           phone: DataTypes.STRING,
           country: DataTypes.STRING,
           name: DataTypes.STRING,
        },
        {
            sequelize: connection
        })
    }
}
module.exports = Customer;