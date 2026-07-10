const user = {
    username : "nitesh",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    } 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "nitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "nitesh"
//     console.log(this.username);
    
// }

// Arrow Function

const chai = () => {
    let username = "nitesh"
    console.log(this);
    
}

// chai()


// const addTwo = (num1 , num2) => {
//     return (num1 + num2);                   // explicitily return
    
// }


// const addTwo = (num1 , num2) => num1 + num2      // implicitily return

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "nitesh"})

console.log(addTwo());


// const myArr = [3, 6, 7, 8, 1]

//  myArr.forEach()