const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    place:{type:String,required:true},
    age:{type:Number,required:true},
    task:{type:String,required:true}
})
const user=mongoose.model("lakshmi",userschema)
module.exports=user