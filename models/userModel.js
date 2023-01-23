import { Schema, model, models} from 'mongoose';
import Rrss from './rrssModel';
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
    },
    rol:{
        type: String, 
        enum: ['Admin', 'User'],
        default: 'User'
    },
    rrss: {
        type: Schema.Types.ObjectId,
        ref: 'Rrss',
    }

})

const User = models.User || model('User', userSchema)
/*
    * In the above code, we are checking if the model already exists in the mongoose.models object. If it does, we return it. If it doesn’t, we create it and return it.
* */

export default User