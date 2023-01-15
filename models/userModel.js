import { Schema, model, models} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = models.User || model('User', userSchema)
/*
* En el Modelo nos traemos tambien models y model de mongoose, para cachear el modelo y no tener que crearlo cada vez que se llame a la ruta
* models es un objeto que contiene todos los modelos que se han creado en la aplicación.
* */

export default User