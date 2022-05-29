const express = require("express")
const router = express.Router()
const allied = require("./schallied")
router.post("/", async(req, res) => {
    // console.log(" i am in Peritename,
    // username:rms post")
    console.log(`req.body`, req.body);

    const alliedpost = await new allied({
        arr: req.body.arr,
    })

    const alliedsave = await alliedpost.save()
    console.log(alliedpost)
    res.status(200).json({ err: null });
    res.status(200).json(alliedsave)
})
router.delete("/", async(req, res) => {
    alliedpost = await allied.deleteMany();
    res.status(200).json(alliedpost);
});
module.exports = router