var mongoose = require("mongoose");

var userschema = mongoose.Schema({
    firstName: { type: String },
    age: { type: String },
    gender: { type: String }
})

module.exports = mongoose.model("user", userschema);
