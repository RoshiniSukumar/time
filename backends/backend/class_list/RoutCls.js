const express = require("express")
const router = express.Router()
const fCls = require("./schCls")

router.get("/", async(req, res) => {
    const val = await fCls.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    // try {
    console.log(" i am in Periterms post")
    console.log(`req.body`, req.body);
    const classseposts = await new fCls({
        className: req.body.className,
        tutorName: req.body.tutorName
    })
    const classssaves = await classseposts.save()
    res.status(200).json(classssaves)
        // } catch (err) {
        // res.status(200).json({ err: "err" })
        // }
    res.status(200).json({ err: null });
})
router.delete("/", async(req, res) => {
    deletepost = await fCls.deleteMany();
    res.status(200).json(deletepost);
});
module.exports = router;