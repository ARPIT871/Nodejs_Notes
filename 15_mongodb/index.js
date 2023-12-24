const express = require('express')
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');

// connecting to MongoDB using Mongoose
mongoose.connect('mongodb+srv://arpit:arpit871@practisecluster.syx0dem.mongodb.net/new?retryWrites=true&w=majority')
    .then(() => { console.log("connection made") })
    .catch((err) => { console.log(err) })

// creating schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    }
})

// creating model
const User = mongoose.model('user', userSchema)

// middleware parsing all json data
app.use(express.json());

// Rouutes
app.get("/", (req, res) => {
    res.send("Hi")

})
// web Routes
app.get("/username", async (req, res) => {

    try {
        const allUsername = await User.find({})
        const html = `
    <ul>
    ${allUsername.map((user) => `<li>${user.name}</li>`)} 
    </ul>`

        res.send(html)
    }

    catch (err) {
        console.log(err)
    }

})

// Api routes
app.get("/api/userdata", async (req, res) => {

    try {
        const allDbUsers = await User.find({})
        res.json(allDbUsers)
    }
    catch (err) {
        console.log(err)
    }
})

// route is used when there are more than one request can be made on same route(same path of url)
app.route("/api/user/:id")
    // get request
    .get(async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) res.status(400).json("there is no data")
            res.json(user)
        }
        catch (err) {
            console.log("there is problem", err)
        }
    })
    // patch request
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { name: "changed" })
        res.json("success")

    })
    // Delete Request
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        res.json("success")
    })

app.post("/api/user", async (req, res) => {
    const body = req.body
    if (!body || !body.name || !body.age || !body.email) {

        return res.json({ msg: "please provide a all details" })

    }
    try {
        const newUser = new User({
            name: body.name,
            age: body.age,
            email: body.email
        });
        try {
            await newUser.save()
            console.log("success")
        }
        catch (err) {
            console.log("there is your errr", err)
        }
        console.log(newUser);
        return res.status(201).json({ ms: "success" })

    } 
    catch (error) {
        console.error("Error saving new user:", error);
        return res.status(500).json({ error: "Failed to save user" });
    }

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})