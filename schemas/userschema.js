const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    id:{type:Number,required:true}
})
const user=mongoose.model("users",userschema)
module.exports=user