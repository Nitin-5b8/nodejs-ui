const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/nitincollection"
const connectdb = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('database is connected successfully')
    }
    catch (err) {
        console.log(err.message)
    }
}
module.exports=connectdb
