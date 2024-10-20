const  express  = require("express")
const router=express.Router()
const getall=require('../logic/userlogic')
router.get('/get',getall)
module.exports=router