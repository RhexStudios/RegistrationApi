const { User, Admin, Customer } = require('../../Domain/Models');

//#region POSTs
const createUserAdmin = async (req, res) => {

    const { userId, password, admId, name, email } = req.body;

    const userAdmin = await Admin.create({
        userId,
        password,
        admId,
        name,
        email
    })

    if (!name || !email) {
        return res.status(400).json("nome e e-mail são obrigatórios");
    } else if (password.length > 8) {
        return res.status(400).json("a senha deve conter mais de 8 caracteres");
    }

}

const createUserCustomer = async (req, res) => {

    const { userId, password, phone, country, name } = req.body;

    const userCustomer = await Customer.create({
        userId,
        password,
        phone,
        country,
        name
    })

    if (!name || !password) {
        return res.st.atus(400).json("nome e e-mail são obrigatórios");
    } else if (password.length > 8) {
        return res.status(400).json("a senha deve conter mais de 8 caracteres");
    }

}
//#endregion

//#region GETs
const getAdmins = async (req, res) => {
    const admins = Admin.findAll();

    if (!admins) {
        return res.sendStaus(404);
    }
    return res.json(admins);
}

const getCustomers = async (req, res) => {
    const customers = Customer.findAll();

    if (!customers) {
        return res.sendStaus(404);
    }
    return res.json(customers);
}

const getAdminById = async (req, res) => {
    const query = req.params;
    const admins = Admin.findOne({ where: admId = query });

    if (!admins) {
        return res.sendStaus(404);
    }
    return res.json(admins);
}

const getCustomerById = async (req, res) => {
    const query = req.params;
    const customers = Customer.findOne({ where: userId = query });

    if (!customers) {
        return res.sendStaus(404);
    }
    return res.json(customers);
}

const getAllUsers = async (req, res) => {

    const users = User.findAll();

    if (!users) {
        return res.sendStaus(404);
    }
    return res.json(users);
}




//#endregion

//#region PUTs
const editUser = async (req, res) => {
    const query = req.params;
    const { password, phone, country, name, email } = req.body;

    const userEdited = await User.update(
        { password: password, phone: phone, country: country, name: name, email: email },
        { where: id = query }
    )
    if (!userEdited)
        return res.status(400);
    return res.json(userEdited);
}


//#endregion

//#region Deletes
const deleteUser = async ( req, res ) => {

    const query = req.params;
    const deleteUser = await Postage.destroy({ where: id = query });

    if(!deleteUser)
        return res.status(400);
    return res.json({ message: "Usuário deletada com sucesso!" });
}
//#endregion