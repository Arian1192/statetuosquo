import {Schema, model, models} from 'mongoose';
const rrssSchema = new Schema({
    twitterName:{
        type:String,
        required:true,
        unique:true,
    },
    InstagramName:{
        type:String,
        unique:true,
    },
    twitchName:{
        type:String,
        unique:true,
    },
})

const Rrss = models.Rrss || model('Rrss', rrssSchema)

export default Rrss
