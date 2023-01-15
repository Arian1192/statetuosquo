import bcrypt from "bcryptjs";

const bcryptPassword = (handler) =>{
    return async (req, res) => {
        const {password} = req.body;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
        return handler(req, res);
    }
}
export default bcryptPassword