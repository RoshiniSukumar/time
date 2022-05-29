const express = require("express")
const router = express.Router()
const register = require("./schregister")
const bcrypt = require("bcrypt");

router.get("/", async(req, res) => {
    const vale = await register.find()
    res.status(200).json(vale)
})

router.post("/", async(req, res) => {
    console.log(" i am in Periterms post")
    console.log(`req.body`, req.body);
    try {
        const salt = await bcrypt.genSalt();
        const hash1 = await bcrypt.hash(req.body.password, salt);
        const registerpost = await new register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: hash1,
        })

        const registersave = await registerpost.save()
        console.log(registerpost)

    } catch (err) {
        res.status(200).json({ err: "err" })
    }
    res.status(200).json({ err: null });
    res.status(200).json(registersave)
})

router.get("/:id", async(req, res) => {
    console.log("i am in getid items")
    console.log(req.body)
    const getid = await register.findById(req.params.teacher_name)
    res.status(200).json(getid)
})




module.exports = router