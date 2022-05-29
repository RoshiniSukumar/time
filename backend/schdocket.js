const mongoose = require("mongoose")

var docket = mongoose.Schema({

    arr: {
        type: Array,
        require: true,
    }
})

module.exports = mongoose.model("docket", docket)