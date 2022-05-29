const mongoose = require("mongoose")

var classs = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("classs", classs)