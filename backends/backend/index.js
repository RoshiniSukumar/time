const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = 2000


app.use(express.json())
app.use(cors())

const teacherss = require("./teachers/Routteacher")
const cls = require("./class_list/RoutCls")
    // const classes = require("./class_details/Routclasses")
const classs = require("./classs/Routclasss")
const fixclass = require("./fixclass/RouterFixclass")
const register = require("./register/Routregister")
const login = require("./login/Routlogin")
const staff = require("./staff/Routstaff")
const timetabe = require("./timetable/RouteTimetabe")
app.use("/teacher", teacherss)
app.use("/class", classs)
app.use("/register", register)
app.use("/timetabe", timetabe)
app.use("/fixclass", fixclass)
app.use("/login", login)
app.use("/cls", cls)
app.use("/staff", staff)
mongoose.connect("mongodb://localhost:27017/timetable", (err) => {
    if (err) { console.log("error") } else { console.log("connect") }
})



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))