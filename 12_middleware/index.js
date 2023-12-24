const express = require('express')
const app = express();
const PORT = 8000;
const users = require('./MOCK_DATA.json')
const fs=require("fs")

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.body)
    const user=`\n${Date.now()}-${req.method}`
    fs.appendFile('./log.txt',user,(err,data)=>{
        req.userIdentified="user is clean there is no threat"
        next()
    })
    

})
// Rouutes
app.get("/", (req, res) => {
    res.send("Hi")
    console.log(req.userIdentified)
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
    res.setHeader('my-name', 'PiyushGArg')
    return res.json((users))

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
      return res.json({status: 'success',id:users.length+1})
    })
   
  
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})