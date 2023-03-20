const express = require('express');
const router3 = express.Router();
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const videoupladmodel= require('../models/uploaddb'); 
const cloud1 = require('../models/cloudinary');
const cloud2 = require('../models/cloudinary2');
router3.route('/retrive').get((req, res, next) => {

    videoupladmodel.find({})
        .then((results) => {
            const title = results[0].title;
            const description=results[0].description;
            const file =results[0].file;
            const file1= results[0].file1;
            videoupladmodel.find({title:title,description:description,file:file,file1:file1})
            .then((result) =>{
                res.json(result);
            })
                .catch((err) => {
                    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
                })
            })
        .catch((err) => {
            res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
        });
});
module.exports = router3; //exporting the router