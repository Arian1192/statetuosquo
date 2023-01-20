import User from '../../../models/userModel';
import bcryptPassword from "../../../utils/middlewares/bcryptPassword";
import generateJWT from "../../../utils/generateJWT";
async function handler(req, res) {
    try{
        const {username, email, name, password } = req.body;
        if(!username || !email || !name || !password) return res.status(400).json({message: 'Please fill all the fields'});
        const isUserOnDatabase = await User.findOne({username});
        if (isUserOnDatabase) return res.status(400).json({message: 'User already exists'});
        const isEmailOnDatabase = await User.findOne({email})
        if (isEmailOnDatabase) return res.status(400).json({message: 'Email already exists'});
        const newUser = await User.create({
            username,
            email,
            name,
            password
        })
        await newUser.save();
        const userToReturn = generateJWT(newUser);
        res.status(200).json(userToReturn);
    }catch (e) {
        res.status(500).json({message: `Error creating user: ${e}`})
    }
}

export default bcryptPassword(handler);