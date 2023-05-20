/*n Node.js, when a request comes in, it's handled by the main event loop. The event loop is responsible for managing all I/O operations, including network requests, file system access, and other asynchronous tasks.

If the request is non-blocking, meaning that it can be handled without waiting for any other I/O operations to complete, then the event loop will handle it directly. This is what makes Node.js so fast and efficient, since it can handle many requests at the same time without blocking the event loop.

However, if the request is blocking, meaning that it requires some kind of synchronous I/O operation, then the event loop will delegate that request to the thread pool. The thread pool is a separate pool of worker threads that can handle blocking I/O operations without blocking the event loop.

When a request is delegated to the thread pool, a worker thread is assigned to handle it. The worker thread will handle the blocking I/O operation, and then return the result back to the event loop. Once the result is returned, the event loop can continue processing the request.

After the worker thread has completed its task, it goes back into the thread pool where it can be reused for another blocking request. This allows Node.js to handle both blocking and non-blocking requests efficiently, without sacrificing performance. */

const fs = require('fs');
const os = require('os');


// non-blocking requests 
// console.log(1)
// fs.readFile("./text.txt", "utf8",(err,data)=>err?console.log(err):console.log(data))
// console.log(2)

/*you will see that in non blocking operation the interpretor should not have to wait for data
to print because it have callback function so it can behave like asynchronous functioni*/


// ...blocking request
// console.log(1)
// const result=fs.readFileSync("./text.txt", "utf-8");
// console.log(result)
// console.log(2)

/*you will see that in blocking operation the interpretor should have to wait for data
to print the data because it is blocking the main thread*/

// default thread size of pool = 4
// max- depends on the cors of the cpu


/* you can know your cpu cores with os module Os module
provide data of your operating system*/

console.log(os.cpus().length)