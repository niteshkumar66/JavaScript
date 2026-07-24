const promiseOne = new Promise(function (resolve , reject){
    // Do and async task 
    // DB Calls , Cryptogrpahy , Network 
    setTimeout(function(){
        console.log('Async task is complete'); 
        resolve()
    } , 1000)
})

promiseOne.then(function (){
    console.log("Promise Consumed");
    
})

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 ');
        resolve()
    } , 1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve , reject ){
    setTimeout(function(){
        resolve({userName : "chai", email : "chai@chaiaurcode.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName : 'Nitesh' , password : '123'})
        } else {
            reject('ERROR : SOMETHING WENT WRONG')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((username) => {
    // console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(function(){
    console.log("The promise is either is resolve or rejected");
})


const promiseFive = new Promise((resolve , reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'Raghu Singh' , password : '123'})
        } else {
            reject('ERROR : RAGHU WENT WRONG')
        }
    }, 1000)
})

async function consumePromiseFive(){
    await promiseFive()
}