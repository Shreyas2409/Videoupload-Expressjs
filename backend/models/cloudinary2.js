const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

const storage1 = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'CloudinaryDemo2',
        allowedFormats: ['mp4', 'mov', 'avi'],
    },
    path:{
        
          resource_type: "video",
          chunk_size: 6000000,
    },
                                                               
}); 

module.exports = {
    storage1
};
