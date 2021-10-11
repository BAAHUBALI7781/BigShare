const express=require('express'); 
const PORT=process.env.PORT || 8080;
const app=express();
const path=require('path');

const connectDb=require('./config/mongoose');
connectDb();

app.use(express.static('./public'));

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use('/',require('./routes/index'));

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})