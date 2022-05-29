const express = require("express")
const router = express.Router()
const register = require("./schregister")
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
    console.log(Userdata)
        // } catch () {
        // res.status(404).json();
        // }
    var usernme = req.body.username
    var password = req.body.password
    res.status(204).json({ err: null });
});
module.exports = router