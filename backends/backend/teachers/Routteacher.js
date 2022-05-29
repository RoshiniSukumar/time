const express = require("express")
const router = express.Router()
const teacher = require("./schteacher")

router.get("/", async(req, res) => {
    const val = await teacher.find();
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    try {
        console.log(" i am in Periterms post")
        console.log(`req.body`, req.body);
        const teacherpost = await new teacher({
            name: req.body.name,
            class: req.body.class,
            subject: req.body.subject,
            hrs: req.body.hrs
        })
        const teachersave = await teacherpost.save()
            // res.status(200).json(teachersave)
    } catch (err) {
        res.status(200).json({ err: "err" })
    }
    res.status(200).json({ err: null });
})

router.get("/:id", async(req, res) => {
    console.log("i am in getid items")
    console.log(req.body)
    const getid = await teacher.findById(req.params.name)
    res.status(200).json(getid)
})



router.put("/", async(req, res) => {
    console.log('i am in put items')
    console.log("data", req.body)
    const updateteacher = await teacher.updateMany({ _id: req.body._id }, { $set: { calss: req.body.class, subject: req.body.subject } })

    res.status(200).json(updateteacher)
})
router.delete("/", async(req, res) => {
    deletepost = await teacher.deleteMany();
    res.status(200).json(deletepost);
});

module.exports = router