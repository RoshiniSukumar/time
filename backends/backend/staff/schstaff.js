const mongoose = require("mongoose")

const staff = mongoose.Schema({
    timetable: {
        type: {},
        required: true
    }
})

module.exports = mongoose.model("staff", staff)