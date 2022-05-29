const mongoose = require("mongoose")

const teacher = mongoose.Schema({
    teacher_name: {
        type: String,
        required: true,
    },
    _1_year: {
        type: String,
        required: true,
    },
    _1y_1class: {
        type: String,
        required: true,
    },
    _1y_1hrs: {
        type: String,
        required: true,
    },
    _1y_2class: {
        type: String,
        required: true,

    },
    _1y_2hrs: {
        type: String,
        required: true,
    },
    _2_year: {
        type: String,
        required: true,

    },
    _2y_1class: {
        type: String,
        required: true,

    },
    _2y_1hrs: {
        type: String,
        required: true,

    },
    _2y_2class: {
        type: String,
        required: true,

    },
    _2y_2hrs: {
        type: String,
        required: true,

    },
    _3_year: {
        type: String,
        required: true,

    },
    _3y_1class: {
        type: String,
        required: true,

    },
    _3y_1hrs: {
        type: String,
        required: true,

    },
    _3y_2class: {
        type: String,
        required: true,

    },
    _3y_2hrs: {
        type: String,
        required: true,

    },

})

module.exports = mongoose.model("teachers_detial", teacher)