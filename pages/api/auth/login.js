import User from '../../../models/userModel';
import bcrypt from "bcryptjs";
import generateJWT from "../../../utils/generateJWT";
export default async function handler(req, res) {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user) return res.status(404).json({message: 'User not found'});
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({message: 'Invalid credentials'});
        const token = generateJWT(user);
        res.status(200).json(token);

    } catch (e) {
        res.status(500).json({message: 'Error logging in'})
    }
}