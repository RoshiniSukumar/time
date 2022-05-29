const express = require("express")
const router = express.Router()
const register = require("./../register/schregister")
const bcrypt = require("bcrypt");
router.post("/", async(req, res) => {
    console.log(req.body);
    // try {
    var Userdata = await register.findOne({ username: req.body.username });
    if (!Userdata) {
        return res.status(200).json({ err: "Username Not Exists" });
    }
    var validation = await bcrypt.compare(req.body.password, Userdata.password);
    if (!validation) {
        return res.status(200).json({ err: "Password Incorrect" });
    }
    var valid = await register.findOne({ role: req.body.role });
    if (!valid) {
        return res.status(200).json({ err: "Role Incorrect" });
    }
    console.log(Userdata)
        // } catch () {
        // res.status(404).json();
        // }
    var usernme = req.body.username
    var password = req.body.password
    var role = req.body.role
    res.status(204).json({ err: null });
});
module.exports = router