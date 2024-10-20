const user=require('../schemas/userschema')

const getallusers=async(req,res)=>{
    try{
    const data=await user.find()
    res.send(data).status(200)
    }catch(err){
        res.send('no users are there').status(404)
    }
}
module.exports=getallusers
