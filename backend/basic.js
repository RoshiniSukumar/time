const mongoose = require("mongoose")

var basic = mongoose.Schema({

    se: {
        type: String,
        // required: true,
    },
    so: {
        type: String,
        // required: true,
    },
    tc: {
        type: String,
        // required: true,
    },
    te: {
        type: String,
        // required: true,
    },
    to: {
        type: String,
        // required: true,
    },
    he: {
        type: String,
        // required: true,
    },
    ho: {
        type: String,
        // required: true,
    },
})

module.exports = mongoose.model("basic", basic)