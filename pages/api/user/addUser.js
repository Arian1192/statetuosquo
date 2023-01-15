import User from '../../../models/userModel';

export default async function handler(req, res) {
    try{
        const { username, email, name, password } = req.body;
        const user = await User.create({
            username,
            email,
            name,
            password
        })
        await user.save();
        res.status(200).json({message: 'User created successfully'})
    }catch (e) {
        res.status(500).json({message: 'Error creating user'})
    }
}

