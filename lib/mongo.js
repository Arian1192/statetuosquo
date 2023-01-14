const mongoose = require('mongoose')
require('dotenv').config()
const DDBB_URL = process.env.BBDD_ACCESS

if (!DDBB_URL) throw new Error('Please define the database access in the .env file')

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

mongoose.set('strictQuery', true)
const dataBaseConnection = async () => {
    if(cached.conn) return cached.conn
    if(!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        cached.promise = mongoose.connect(DDBB_URL, opts).then((mongoose) => {
            console.log('Connected to the database 🚀')
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

module.exports = { dataBaseConnection }