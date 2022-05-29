const express = require("express")
const router = express.Router()
const fixed = require("./schfixdhrs")
router.post("/", async(req, res) => {
    // console.log(" i am in Peritename,
    // username:rms post")
    console.log(`req.body`, req.body);

    const fixedpost = await new fixed({
        arr: req.body.arr,
    })

    const fixedsave = await fixedpost.save()
    console.log(fixedpost)
    res.status(200).json({ err: null });
    res.status(200).json(fixedsave)
})
router.delete("/", async(req, res) => {
    fixedpost = await fixed.deleteMany();
    res.status(200).json(fixedpost);
});
module.exports = router