function sayMyName () {
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNum(num1 , num2){        // num1 & num2 are parameter 
//     
//      console.log(num1 + num2);   
// }

// function addTwoNum(num1 , num2){        // num1 & num2 are parameter 
    
//     let result = num1 + num2
//     return result    
// }

function addTwoNum(num1 , num2){        // num1 & num2 are parameter 
    
    return num1 + num2
}

// addTwoNum(3,5)                          // 3 & 5 are arguments 
// addTwoNum(3,"5")                          // 3 & 5 are arguments 
// addTwoNum(3,"a")                          // 3 & 5 are arguments 
// addTwoNum(3,null)                          // 3 & 5 are arguments 

const result = addTwoNum(4, 5)

// console.log("Result is " , result);


// function loginUserMsg (username){
//     if(username === undefined){
//         console.log("Please Enter a username");
//         return
//     }
//     return `${username} Just logged In`
    
// }


// function loginUserMsg (username){
//     if(!username){
//         console.log("Please Enter a username");
//         return
//     }
//     return `${username} Just logged In`
    
// }


function loginUserMsg (username = "sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} Just logged In`
    
}


// console.log(loginUserMsg("niteshkumar66"))
// console.log(loginUserMsg(""))
// console.log(loginUserMsg())


/* rest operator help to bind more than 1 value in an array using single parameter in any function ( in case of shoping cart items price calculator ) where the arguments can be more than one and the function return the array containing all the values passed */


// function calculateCartPrice (...num1 ) {       // ...num1 => rest operator 
//     return num1
// }

// console.log(calculateCartPrice(200 , 400 , 500 , 100 , 800 ));


function calculateCartPrice (val1 , val2 , ...num1 ) {       // ...num1 => rest operator 
    return num1                                 // 200 , 400 => val1 & val2 rest in num1
}

// console.log(calculateCartPrice(200 , 400 , 500 , 100 , 800 ));

const user = {
    username : "nitesh",
    price : 199,
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price : 399
})


const myNewArray = [400 , 500 , 600 , 100]

function returnSecondValue (getarray) {
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 600 , 800]));
