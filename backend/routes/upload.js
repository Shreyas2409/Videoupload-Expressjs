const express = require('express');
const router3 = express.Router();
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const videoupladmodel= require('../models/uploaddb'); 
const cloud1 = require('../models/cloudinary');
const cloud2 = require('../models/cloudinary2');

router3.route('/upload').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const file = req.body.file;
    const file1 = req.body.file1;
    const image = req.file.file;
    const video= req.file.file1;

    const upload = new videoupladmodel({
        title,
        description,
        file,
        file1,
    });

cloudinary.v2.uploader
.upload(image,{folder: 'CloudinaryDemo'})
.then(result=>console.log(result));

cloudinary.v2.uploader
.upload(video,{folder: 'CloudinaryDemo2'})
.then(result=>console.log(result));

    upload.save()
        .then(() => res.json({ redirect: '/' }))
        .catch(err => res.status(400).json('Error' + err));

});


module.exports = router3; //exporting the router