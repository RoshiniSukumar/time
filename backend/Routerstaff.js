const express = require("express")
const router = express.Router()
const staff = require("./schstaff")
router.post("/", async(req, res) => {
    // console.log(" i am in Peritename,
    // username:rms post")
    console.log(`req.body`, req.body);

    const staffpost = await new staff({
        arr: req.body.arr,
    })

    const staffsave = await staffpost.save()
    console.log(staffpost)
    res.status(200).json({ err: null });
    res.status(200).json(staffsave)
})

router.get("/", async(req, res) => {
    const val = await staff.find()
    res.status(200).json(val)
})
router.delete("/", async(req, res) => {
    staffpost = await staff.deleteMany();
    res.status(200).json(staffpost);
});
module.exports = router