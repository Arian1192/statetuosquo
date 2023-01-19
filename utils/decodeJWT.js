const SECRET = process.env.SECRET
const jwt_decode = require('jwt-decode')

export const decodeJWT = (token) => {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace('-', '+').replace('_', '/')
    let decoded = JSON.parse(window.atob(base64))
    return decoded
}

