const mongoose = require("mongoose")

var allied = mongoose.Schema({

    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("allied", allied)