// var c = 300             // global scope
let a = 200

if(true){               // local scope
    let a = 10 
    const b = 20
    // console.log("INNER" , a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Nitesh"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "nitesh"

    if (username === "nitesh"){
        const website = " youtube "
        // console.log(username + website);

    }
    // console.log(Website);
    
}
// console.log(username);


// ********************************* Interesting ************************************


console.log(addOne(5));                 // Can Accessed , no error 
function addOne (num){
    return num + 1
}


addTwo(5)                               // can't access , access befor initialisation error
const addTwo = function(num) {
    return num + 2
}
