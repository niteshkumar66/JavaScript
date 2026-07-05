// on the basis of value stored and access 
// 2 types of datatype

//  Primitive (call by value)

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// JS is dynamically type 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null 
let userEmail; // undefined 

// console.log(typeof outsideTemp);
// console.log(typeof userEmail);


const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(typeof Id);


// console.log(Id === anotherId);
// console.log(Id == anotherId);

// const bigNum = 785349578903257238950289595785785785789n
// n as a suffix used to convert the number to bigint datatype 
// console.log(typeof(bigNum)); // datatype = bigint



const bigNumber = 893729052389589384795n
// console.log(typeof (bigNumber));

const StringValue = String(bigNumber)
// console.log(StringValue);
// console.log(typeof (StringValue));


// Non-Primitive (refrence type)

// Arrays , Objects , Functions 

const heros = [3,4,5,6,7,8,9] // arrays 

let myObj = {                 // Objects 
    name : "nitesh kumar",
    age : 22,
    isLoggedOut : false,  
}      

const myFunction = function (){
    console.log("Hello World");
}

// console.log(typeof myFunction);  // datatype : function object
// console.log(typeof heros);  // datatype : object 
// console.log(typeof myObj);  // datatype : object 



// ****************************************************************

// Stack Memory (Primitive). &   Heap Memory (Non-Primitive)
//    (copy get changed)            //refrence type (original also change)
let myYoutubeName = "toonparivaar"
let anotherName = myYoutubeName
anotherName = "rajatdalaldotcom"

console.log(anotherName);
console.log(myYoutubeName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybi"

}

let user2 = user1

user2.email = "googleuser@gmail.com"

console.log(user1.email);
console.log(user2.email);
