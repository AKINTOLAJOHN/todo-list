const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const userRouter = require('./routes/users.route')
const mongoose = require('mongoose')
const PORT = process.env.PORT;
const URI = process.env.MONGO_URL;

app.use('/user',userRouter)

mongoose.connect(URI, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
});



app.listen(PORT,(req,res)=>{
    console.log(`app is listen on PORT : ${PORT}`)
})