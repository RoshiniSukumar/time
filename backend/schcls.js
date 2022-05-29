const mongoose = require("mongoose")

var cls = mongoose.Schema({

    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("cls", cls)