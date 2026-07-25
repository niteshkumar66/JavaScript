// let myName = "Nitesh     "
// let myChannel = "chaiAurCode     "

// console.log(myName.trueLength);


let myHeros = ['thor','spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function (){
    console.log(`Hitesh is present in all objects `);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh Says Hello`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// Inheritance 

const user = {
    name : 'chai',
    email : 'chai@google.com'
}

const teacher = {
    makeVideo : true 
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : teachingSupport
}
teacher.__proto__ = user

// modern Syntax

Object.setPrototypeOf(teachingSupport , teacher)


let anotherUserName = 'chaiAurCode     '

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
    
    
}

anotherUserName.trueLength()
'hitesh'.trueLength()
'iceTea'.trueLength()