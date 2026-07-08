// const twitterUser = new Object()     // singleton object 

const twitterUser = {}  // non singleton object

twitterUser.id = "123ab"
twitterUser.name = "Sammy"
twitterUser.isLoggedIn = true

// console.log(twitterUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullname : {
            firstName : "nitesh",
            lastName : "Kumar",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);

// console.log(regularUser.fullname?.userFullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , obj2}

// console.log(obj3);
// const obj3 = Object.assign({} , obj1, obj2)

const obj3 = {...obj1 , ...obj2}
console.log(obj3);


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

console.log(users[1].email);

console.log(twitterUser);

console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('isLoggedIn'));
