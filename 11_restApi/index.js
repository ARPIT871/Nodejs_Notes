const express = require('express')
const app = express();
const PORT = 8000;
const users = require('./MOCK_DATA.json')
const fs=require("fs")

app.use(express.json());
// Rouutes
app.get("/", (req, res) => {
    res.send("hine")
})
// web Routes
app.get("/user", (req, res) => {
    
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)} 
    </ul>`

    res.send(html)

})

// Api routes
app.get("/api/user", (req, res) => {
    res.send((users))
})

app.route("/api/user/:id")
.get( (req, res) => {
   const id=users.find((user)=>user.id==req.params.id)
   res.send(id)
})
.put((req, res) => {

})
.delete( (req, res) => {

})
app.post("/api/user", (req, res) => {
    const data=(req.body);
    users.push({...data, id:users.length+1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
     res.json({status: 'success',id:users.length+1})
    })
   
    
    res.send("completed")
})

app.listen(PORT, () => {
    console.log('listening on port')
})