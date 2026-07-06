const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toTimeString())


// console.log(typeof myDate);

// let myCreatedDate = new Date (2026, 0, 23) // month start from 0 to 11 in JS 
// let myCreatedDate = new Date (2026,0,23, 5, 5,48) 
// let myCreatedDate = new Date ("2026-02-21") 
let myCreatedDate = new Date ("02-21-2026") 
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now() / 1000 ));

let newDate = new Date ();

// console.log(newDate);
// console.log(newDate.getMonth() + 1); // month start from 0 to 11 


// console.log(`the current month is ${newDate.getMonth()+1} and the current date is ${newDate.toDateString()}`);

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
    dayPeriod: "long",
}))









