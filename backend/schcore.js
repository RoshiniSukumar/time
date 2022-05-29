const mongoose = require("mongoose")

var core = mongoose.Schema({

    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("core", core)