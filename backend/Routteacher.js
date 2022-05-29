const express = require("express")
const router = express.Router()
const teacher = require("./schteacher")

router.get("/", async(req, res) => {
    const val = await teacher.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log(" i am in Periterms post")
    console.log(`req.body`, req.body);
    const teacherpost = await new teacher({
        teacher_name: req.body.teacher_name,
        _1_year: req.body._1_year,
        _1y_1class: req.body._1y_1class,
        _1y_1hrs: req.body._1y_1hrs,
        _1y_2class: req.body._1y_2class,
        _1y_2hrs: req.body._1y_2hrs,
        _2_year: req.body._2_year,
        _2y_1class: req.body._2y_1class,
        _2y_1hrs: req.body._2y_1hrs,
        _2y_2class: req.body._2y_2class,
        _2y_2hrs: req.body._2y_2hrs,
        _3_year: req.body._3_year,
        _3y_1class: req.body._3y_1class,
        _3y_1hrs: req.body._3y_1hrs,
        _3y_2class: req.body._3y_2class,
        _3y_2hrs: req.body._3y_2hrs,
    })
    const teachersave = await teacherpost.save()
    res.status(200).json(teachersave)
})

router.get("/:id", async(req, res) => {
    console.log("i am in getid items")
    console.log(req.body)
    const getid = await teacher.findById(req.params.teacher_name)
    res.status(200).json(getid)
})



router.put("/", async(req, res) => {
    console.log('i am in put items')
    console.log("data", req.body)
    const updateteacher = await teacher.updateMany({ _id: req.body._id }, { $set: { kg: req.body.kg } })

    res.status(200).json(updateteacher)
})

module.exports = router