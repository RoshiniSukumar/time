const express = require("express")
const router = express.Router()
const docket = require("./schdocket.js")
router.post("/", async(req, res) => {

    console.log(`req.body`, req.body);

    const docketpost = await new docket({
        arr: req.body.arr,
    })

    const docketsave = await docketpost.save()
    console.log(docketpost)
    res.status(200).json({ err: null });
    res.status(200).json(docketsave)
})
router.delete("/", async(req, res) => {
    docketpost = await docket.deleteMany();
    res.status(200).json(docketpost);
});
module.exports = router