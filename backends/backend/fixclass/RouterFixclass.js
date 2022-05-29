const express = require("express")
const router = express.Router()
const fixClass = require("./schFixClass")

router.get("/", async(req, res) => {
    const val = await fixClass.find()
    res.status(200).json(val)
})

router.post("/", async(req, res) => {
    try {
        console.log(`req.body`, req.body);

        const fixClasspost = await new fixClass({
            className: req.body.className,
            subject: req.body.subject,
            fixHrs: req.body.fixHrs
        })
        const fixClasssave = await fixClasspost.save();
        // res.status(200).json(fixClasssave)
    } catch (err) {
        res.status(200).json({ err: "err" })
    }
    res.status(200).json({ err: null });

})


router.put("/", async(req, res) => {
    console.log('i am in put items')
    console.log("data", req.body)
    const updatefixClass = await fixClass.updateMany({ _id: req.body._id }, { $set: { sub: req.body.sub } })

    res.status(200).json(updatefixClass)
})
router.delete("/", async(req, res) => {
    deletepost = await fixclass.deleteMany();
    res.status(200).json(deletepost);
});

module.exports = router