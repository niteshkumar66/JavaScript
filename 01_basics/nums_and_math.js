const score = 400
// console.log(score); 


const balance = new Number(100.44)
// console.log(balance);
// console.log(balance.toFixed(1));

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toString().replace('1','6'))


const otherNumber = 433.5864
// console.log(otherNumber.toPrecision(3));


const hundreds = 10000000
// console.log(hundreds.toLocaleString());           // comma seperation 
// console.log(hundreds.toLocaleString('en-IN'));    // indian seperation 



// ************************* MATHEMATICS *******************************

// console.log(Math);
// console.log(Math.abs(-4));              // convert Negative -> positive
// console.log(Math.round(4.894859));      // roundOff 
// console.log(Math.ceil(4.894859));       // upper roundOff 
// console.log(Math.floor(4.894859));      // Lower roundOff
// console.log(Math.min(3,4,2,6,7));       // min of the array
// console.log(Math.max(3,4,2,6,7));       // max of the array


// Math.randon () => gives value between 0 and 1 , for the favourable outcome multiply by 10 and then add 1 (to avoid 0 as a random no.)

// console.log(Math.random());
// console.log(Math.random()*10 + 1 );      
// console.log((Math.random()*10) + 1 );
// console.log(Math.floor((Math.random()*10)) + 1 );

// formula => (Math.random() * (max - min + 1) + min )

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1 )) + min)

// 4 digit OTP example => 
    
const newMin = 1000
const newMax = 9999

console.log(Math.floor(Math.random() * (newMax - newMin + 1 )) + newMin)

 
