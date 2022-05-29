const mongoose = require("mongoose")

var fixClass = mongoose.Schema({
    className: {
        type: String,
        require: true
    },
    subject: {
        type: Object,
        require: true
    },
    fixHrs: {
        type: Array,
        require: true
    }
})

module.exports = mongoose.model("fixClass", fixClass)