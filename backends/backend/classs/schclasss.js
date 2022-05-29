const mongoose = require("mongoose")

var classs = mongoose.Schema({
    className: {
        type: String,
        require: true
    },
    subject: {
        type: Object,
        require: true
    }
})

module.exports = mongoose.model("classs", classs)