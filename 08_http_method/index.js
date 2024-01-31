const http = require("http")
const fs = require("fs")
const url=require('url')

const myServer = http.createServer((req, res) => {
 
    if(req.url==='/favicon.ico') return res.end()

    fs.appendFile("text.txt", `${Date.now()}-${req.url}-${req.method}\n`, (err) => {
    const myUrl=url.parse(req.url,true)
        switch (myUrl.pathname) {
            case "/":
                if(req.method==="GET")res.end("Home Page")
                break;
            case "/about":
                const username=myUrl.query.myname
                res.end(`hi ${username}`)
                break;
            case "/SignUp":
                if(req.method==='GET') res.end("SignUpForm")
                else if(req.method==='POST') res.end("success")
                
                break;

                default :
                res.end("defaultpage")

        }
    })

})

myServer.listen(8000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("listening on")
})