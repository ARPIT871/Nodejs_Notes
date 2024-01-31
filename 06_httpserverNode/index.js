const http = require("http")
const fs = require("fs")
const url=require('url')

const myServer = http.createServer((req, res) => {
 
    if(req.url==='/favicon.ico') return res.end()
    fs.appendFile("text.txt", `${Date.now()}-${req.url}\n`, (err) => {
    const myUrl=url.parse(req.url)
    console.log(myUrl)
        switch (myUrl.path) {
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                res.end("About page")
                break;
            case "/contact":
                res.end("contact")
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