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
            role: req.body.role
        })

        const registersave = await registerpost.save()
        console.log(registerpost)

    } catch (err) {
        res.status(200).json({ err: "err" })
    }
    res.status(200).json({ err: null });
    // res.status(200).json(registersave)
})

router.delete("/:id", async(req, res) => {
    // try {
    const deletecart = await register.deleteOne({ _id: req.params.id },
        res.redirect("http://localhost:2000/register")
    );
    console.log(req.params.id);
    res.status(200).json(deletecart);
    // } catch (err) {
    // res.status(404).json("err:", err);
    // }
})




module.exports = router