const SECRET = process.env.SECRET
import jwt from 'jsonwebtoken'

const generateJWT = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        name: user.name
    }
    const token = jwt.sign(payload, SECRET, {expiresIn: '1h'})
    return token
}

module.exports = generateJWT