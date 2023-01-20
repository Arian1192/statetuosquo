import bcrypt from "bcryptjs";

const bcryptPassword = (handler) =>{
    return async (req, res) => {
        const {password} = req.body;
        if(!password) return res.status(400).json({message: 'Please fill all the fields'})
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
        return handler(req, res);
    }
}
export default bcryptPassword