const mongoose=require('mongoose');
require('dotenv').config();
function connectDb(){
    mongoose.connect(process.env.MONGO_URL);
    const connection=mongoose.connection;
    connection.once('open',(err)=>{
        if(err){
            console.log("Not connected to database!");
            return;
        }
        console.log('Database connected!');
    })
}
module.exports=connectDb;