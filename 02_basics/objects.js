// singleton
// Object.create       // constructor method 

// object literals 

const mySym = Symbol("key1")

const JsUser =  {
    name: "Nitesh",
    "full Name" : "Nitesh Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "nitesh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.full Name);       // can't access through .full Name

// console.log(JsUser["full Name"]);

// console.log(JsUser[mySym]);


JsUser["location"] = "Mumbai"
// console.log(JsUser["location"]);

// Object.freeze(JsUser);

JsUser["email"] = "nitesh@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
 
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


