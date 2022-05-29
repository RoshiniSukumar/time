const mongoose = require("mongoose")

const timetabe = mongoose.Schema({
    timetable: {
        type: {},
        required: true
    }
})

module.exports = mongoose.model("timetabe", timetabe)