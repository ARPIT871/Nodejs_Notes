const express = require('express')
const app = express();
const PORT = 8000;
const users = require('./MOCK_DATA.json')
const fs=require("fs")

app.use(express.json());

// Api routes
app.get("/api/user", (req, res) => {
    // always use X in front of custom headers
    // these headers we sent with response
    res.setHeader("x-newHeader","arpit-rajput")
    // you can aceess headers using req.header which are coming from user
    return res.json((users))
})



app.listen(PORT, () => {
    console.log('listening on port')

})