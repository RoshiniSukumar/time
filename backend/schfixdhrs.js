const mongoose = require("mongoose")

var fixed = mongoose.Schema({

    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("fixed", fixed)