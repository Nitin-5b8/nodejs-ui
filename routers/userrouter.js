const  express  = require("express")
const router=express.Router()
const userlogic=require('../logic/userlogic')
router.get('',userlogic.getallusers)
router.post('',userlogic.addauser)
router.put('/:id',userlogic.updateuser)
router.delete('/:id',userlogic.deleteditem)
router.adduser('',userlogic.adduser)
module.exports=router  