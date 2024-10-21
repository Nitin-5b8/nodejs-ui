const express = require('express'); 
const mor=require('morgan')
const app = express(); 
app.use(express.json()); 
app.use(mor('dev'))
const connectdb=require("./databaseconnection")
const router=require('./routers/userrouter')
const PORT = 3000; 

connectdb()
app.use('/',router)
app.listen(PORT, () => { 
 console.log(`Server is running at http://localhost:${PORT}`); 
}); 