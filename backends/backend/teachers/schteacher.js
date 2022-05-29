const mongoose = require("mongoose")

const teacher = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: Array,
            required: true
    },
    subject: {
        type: Array,
        required: true
    },
    hrs: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("teachers_detial", teacher)