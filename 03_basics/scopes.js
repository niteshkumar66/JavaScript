// var c = 300             // global scope
let a = 200

if(true){               // local scope
    let a = 10 
    const b = 20
    console.log("INNER" , a);
    
}



console.log(a);
// console.log(b);
// console.log(c);
