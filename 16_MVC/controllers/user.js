const {User}=require('../models/user');
const getUsername =async (req, res) => {

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

}
const getUserByID = async (req, res) => {

        try {
            const user = await User.findById(req.params.id)
            if (!user) res.status(400).json("there is no data")
            res.json(user)
        }
        catch (err) {
            console.log("there is problem", err)
        }
}

const updatUser=async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { name: "changed" })
    res.json("success")

}
const deleteUser=async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json("success")
}
const postData=async (req, res) => {
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

}
module.exports ={
    getUsername,
    getUserByID,
    updatUser,
    deleteUser,
    postData
}