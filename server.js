const express = require("express")
const mongoose = require("mongoose")
const Registeruser = require("./model")
const jwt = require("jsonwebtoken")
const middleware = require("./middleware")
const cors = require('cors');
const app = express()

mongoose.connect("mongodb+srv://mounika:mounika@cluster0.4qioyol.mongodb.net/?retryWrites=true&w=majority").then(
    () => {
        console.log("DB connected")
    }
)

app.use(express.json())

app.use(cors({origing:"*"}))

app.get("/", (req, res) => {
    res.send("homepage")
})

app.post("/register", async(req, res) => {
    try {

        const { username, email, password, confirmpassword } = req.body
        let exist = await Registeruser.findOne({ email})
        if (exist) {
            return res.status(400).send("User Already Exist")
        }
        if (password!== confirmpassword) {
            return res.status(400).send("Passwors are not matching")
        }
        let newUser = new Registeruser({
            username, email, password, confirmpassword 
        })
        await newUser.save()
        res.status(200).send("Register Succsessfully")
        
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internel Server Error")
    }
})

app.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body
        let exist = await Registeruser.findOne({ email })
        if (!exist) {
            return res.status(400).send("User Not Found")
        }
        if (exist.password!==password) {
            return res.status(400).send("Invalid Credentials")
        }
        let payload = {
            user: {
                id:exist.id
            }
        }
        jwt.sign(payload, "jwtoken", { expiresIn: 3600000 },
            (err, token) => {
            if (err) throw err
            return res.json({token})
            }
        )
    } catch (err) {
        console.log(err)
        return res.status(500).send("Server Error")
        
    }
})

app.get("/myprofile", middleware, async (req, res) => {
    try {
        let exist=await Registeruser.findById(req.user.id)
        if (!exist) {
            return res.stat(400).send("User Not Found")
        }
        res.json(exist)
    } catch (err) {
        console.log(err)
        return res.stat(500).send("Server Error")
    }
})

app.listen(5000, () => {
    console.log("server is running")
})