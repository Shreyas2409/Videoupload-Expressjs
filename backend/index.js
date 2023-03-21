const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const router = express.Router();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const axios = require('axios');
const path = require('path');
const session =require('express-session');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
 const multer = require('multer')
 
 
 app.use(express.static('public'));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 app.use(bodyParser.raw());
 app.use(cors());
 app.use(fileupload());
 app.options("*",cors());
 app.use(session({
     secret: '039399232003030',
     resave: true,
     saveUninitialized: true
 }));
 const database = process.env.MONGO_API;
 
   mongoose.set('strictQuery', false)
   mongoose.connect(
     'mongodb+srv://.vgzndbe.mongodb.net/?retryWrites=true&w=majority', 
     
     {
       useNewUrlParser: true,
       useUnifiedTopology: true
     }
   );
 const db = mongoose.connection;
 db.on("error", console.error.bind(console, "connection error: "));
 db.once("open", function () {
 console.log("Connected successfully");
 });
      
app.use('/video', require('./routes/upload'));
app.use('/video2', require('./routes/retrive'));

app.listen(port, () => console.log(`Listening on port ${port}`));
