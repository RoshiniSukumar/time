const mongoose = require("mongoose")

var staff = mongoose.Schema({

    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("staff", staff)