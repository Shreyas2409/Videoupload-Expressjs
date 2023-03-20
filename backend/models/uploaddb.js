const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoupload = new Schema({

    title: { type: String, required: true },
    description:{ type: String, required: true},
    file: { type: String, required: true },
    file1: { type: String, required: true },

})

const videouploadmodel = mongoose.model("videouplad",videoupload);

module.exports = videouploadmodel;