const mongoose = require("mongoose")

var cls = mongoose.Schema({
    className: {
        type: String,
        require: true
    },
    tutorName: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("cls", cls)