const express = require('express')
const app = express();
const PORT = 8000;
const userRouter = require('./routes/user');
const {connectMongoDb}=require('./connection');
const LogReqRes=require('./middleware/userLog')

// connection to mongodb
try{
connectMongoDb('mongodb+srv://arpit:arpit871@practisecluster.syx0dem.mongodb.net/new?retryWrites=true&w=majority')
console.log("connection to mongodb successfully established")
}
catch(err){
    console.log("Unable to connect to mongodb",err)
}

// middleware parsing all json data
app.use(express.json());
app.use(LogReqRes("log.txt"))
// routes
app.use("/user",userRouter)
app.get('*',(req, res) =>{
    res.send("<h1>There is no  Route like This</h1>")
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})