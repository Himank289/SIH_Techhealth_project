const mongoose = require("mongoose");

const NewHospitalSchema = new mongoose.Schema({

    hospitalName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    contact : { type : String, required: true },
},
    { timestamps: true }

);

module.exports = mongoose.model("NewHospital", NewHospitalSchema);