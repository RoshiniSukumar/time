const express = require("express")
const router = express.Router()
const classs = require("./schclasss")

router.get("/", async(req, res) => {
    const val = await classs.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    try {
        console.log(" i am in Periterms post")
        console.log(`req.body`, req.body);
        const classspost = await new classs({
            className: req.body.className,
            subject: req.body.subject
        })
        const classssave = await classspost.save()
            // res.status(200).json(classssave)
    } catch (err) {
        res.status(200).json({ err: "err" })
    }
    res.status(200).json({ err: null });
})

router.get("/:id", async(req, res) => {
    console.log("i am in getid items")
    console.log(req.body)
    const getid = await classs.findById(req.params.className)
    res.status(200).json(getid)
})

router.delete("/", async(req, res) => {
    deletepost = await classs.deleteMany();
    res.status(200).json(deletepost);
});


router.put("/", async(req, res) => {
    console.log('i am in put items')
    console.log("data", req.body)
    const updateclasss = await classs.updateMany({ _id: req.body._id }, { $set: { subject: req.body.subject } })

    res.status(200).json(updateclasss)
})

module.exports = router