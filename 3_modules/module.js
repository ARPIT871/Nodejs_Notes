const math = require("./math")
/* reqire function is used when we have to import something 
from another file like here we are importing function from math.js file*/

console.log(math)
// we export an object you can see that in conole.js so you can destructure it if there is too many exports

console.log(math.add(3,4))
console.log(math.subtract(3,4))
