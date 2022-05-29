const express = require("express")
const router = express.Router()
const classs = require("./schclasss")

router.get("/", async(req, res) => {
    const val = await classs.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    console.log(" i am in Periterms post")
    console.log(`req.body`, req.body);
    const classspost = await new classs({
        name: req.body.name,
        arr: req.body.arr
    })
    const classssave = await classspost.save()
    res.status(200).json(classssave)
})

router.get("/:id", async(req, res) => {
    console.log("i am in getid items")
    console.log(req.body)
    const getid = await classs.findById(req.params.teacher_name)
    res.status(200).json(getid)
})



router.put("/", async(req, res) => {
    console.log('i am in put items')
    console.log("data", req.body)
    const updateclasss = await classs.updateMany({ _id: req.body._id }, { $set: { kg: req.body.kg } })

    res.status(200).json(updateclasss)
})

module.exports = router