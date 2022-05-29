const express = require("express")
const router = express.Router()
const cls = require("./schcls")
router.post("/", async(req, res) => {
    // console.log(" i am in Peritename,
    // username:rms post")
    console.log(`req.body`, req.body);

    const clspost = await new cls({
        arr: req.body.arr,
    })

    const clssave = await clspost.save()
    console.log(clspost)
    res.status(200).json({ err: null });
    res.status(200).json(clssave)
})
router.delete("/", async(req, res) => {
    deletepost = await cls.deleteMany();
    res.status(200).json(deletepost);
});
module.exports = router