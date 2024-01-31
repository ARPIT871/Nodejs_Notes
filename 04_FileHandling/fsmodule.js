
const fs = require('fs');
// creating new file using fs module synchronous and asynchronous
// synchronous writing file
// fs.writeFileSync("./text.txt","hello world");

// asynchronous writing file
// fs.writeFile("./text1.txt","hi",(error) => {error})


// Reading file using fs module

// asynchronous reading
fs.readFile("./text.txt","utf-8",(error,data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})

// synchronous reading
const result =fs.readFileSync("./contact.txt","utf-8")

console.log(result)


// you can append data to the file using append
fs.appendFileSync("./text.txt",`${Date.now()}-username\n`)


// you can copy file using cp
// fs.cpSync("./contact.txt")


// you can delete the file using unlink
// fs.unlinkSync("./contact.txt")


// you can see the stats of the the file
// fs.statSync("./contact.txt")

// you make folder using
// fs.mkdirSync("./contact.txt")



