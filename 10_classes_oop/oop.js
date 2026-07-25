const user = {
    userName : "Nitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function (){
        // console.log('Got User Details from Database');   
        // console.log(`Username : ${this.userName}`);
        console.log(this);
        
        
    }

}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);


function User (userName , loginCount , isLoggedIn ){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.grettings = function(){
        console.log(`Welcome ${this.userName}`);
        
    }

    return this
}

const userOne = new User('Nitesh Kumar', 12 , true)
const userTwo = new User('ChaiAurCode', 11 , false )

// console.log(userOne.constructor);
console.log(userOne.grettings())
console.log(userOne instanceof User)
// console.log(userTwo);


/* 1. new keyword -> empty object created -> called Instance 
   2. constructor function called due to new keyword -> pack all the argument and pass 
   3. all the argument injected in this keyword and get the arguments */
