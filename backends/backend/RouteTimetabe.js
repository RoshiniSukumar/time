const express = require("express")
const router = express.Router()
const timetabe = require("./schTimetabe")

router.get("/", async(req, res) => {
    const val = await timetabe.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    // try {
    console.log(" i am in Periterms post")
    console.log(`req.body`, req.body);
    const classsposts = await new timetabe({
        timetable: req.body
    })
    const tutorsaves = await classsposts.save()
    res.status(200).json(tutorsaves)
        // } catch (err) {
        // res.status(200).json({ err: "err" })
        // }
        // res.status(200).json({ err: null });
})
module.exports = router;