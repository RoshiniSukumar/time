const express = require("express")
const router = express.Router()
const core = require("./schcore")
router.post("/", async(req, res) => {
    // console.log(" i am in Peritename,
    // username:rms post")
    console.log(`req.body`, req.body);

    const corepost = await new core({
        arr: req.body.arr,
    })

    const coresave = await corepost.save()
    console.log(corepost)
    res.status(200).json({ err: null });
    res.status(200).json(coresave)
})
router.delete("/", async(req, res) => {
    corepost = await core.deleteMany();
    res.status(200).json(corepost);
});
module.exports = router