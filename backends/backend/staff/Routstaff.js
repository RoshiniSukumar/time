const express = require("express")
const router = express.Router()
const staff = require("./schstaff")

router.get("/", async(req, res) => {
    const val = await staff.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    // try {
    console.log(" i am in Periterms post")
    console.log(`req.body`, req.body);
    const classsposts = await new staff({
        timetable: req.body
    })
    const tutorsaves = await classsposts.save()
    res.status(200).json(tutorsaves)
        // } catch (err) {
        // res.status(200).json({ err: "err" })
        // }
        // res.status(200).json({ err: null });
})
router.delete("/", async(req, res) => {
    deletepost = await staff.deleteMany();
    res.status(200).json(deletepost);
});
module.exports = router;