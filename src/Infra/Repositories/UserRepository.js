const {User, Admin, Customer} = require('../../Domain/Models');

//#region POSTs
const createUserAdmin = async(req,res) =>{

    const {userId, password, admId, name,email} = req.body;

    const userAdmin = await Admin.create({
        userId,
        password,
        admId,
        name,
        email
    })

    if( !name || !email){
        return res.status(400).json("nome e e-mail são obrigatórios");
    }else if(password.length > 8){
        return res.status(400).json("a senha deve conter mais de 8 caracteres");
    }

}

const createUserCustomer = async(req,res) =>{

    const {userId, password, phone, country, name} = req.body;

    const userCustomer = await Customer.create({
        userId, 
        password, 
        phone, 
        country, 
        name
    })

    if(!name || !password){
        return res.st.atus(400).json("nome e e-mail são obrigatórios");
    }else if(password.length > 8){
        return res.status(400).json("a senha deve conter mais de 8 caracteres");
    }

}





//#endregion

//#region GETs
//#endregion

//#region PUTs
//#endregion

//#region Deletes
//#endregion