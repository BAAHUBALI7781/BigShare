const mongoose=require('mongoose');

const fileSchema=new mongoose.Schema({
    fileName:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    },
    uuid:{
        type:String,
        required:true
    },
    sender_mail:{
        type:String
    },
    receiver_mail:{
        type:String
    },
    expire_at: {type: Date, default: Date.now, expires: 86400} 
},{
    timestamps:true
})

module.exports=mongoose.model('File',fileSchema);