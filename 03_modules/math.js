const add =(a,b)=>{
    const sum=a+b;
    return sum;
};
const subtract =(a,b)=>{
    const sub=a-b;
    return sub;
}

// one way to export module is this you can write module.export and then export all the all the functions and daa at one time
module.exports={add,subtract}

// and second way to export module is this you can write 

// exports.add=(a,b)=>{return a+b}
// exports.sub=(a,b)=>{return a+b}
