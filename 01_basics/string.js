const name = "nitesh "
const repoCount = 3

// console.log(name + repoCount);
// console.log(name + "git count " + repoCount);  // bad practice


// Concatination of string =>   // good practice
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declaration =>
const gameName = new String('Nitesh kumar')

// console.log(gameName);
// console.log(gameName.big);

// console.log(gameName[0]);

// => Prototype of string => objects 
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.repeat(2));

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,-4)
console.log(anotherString);


const newStringOne = "    nitesh     kumar     "
console.log(newStringOne);
console.log(newStringOne.trim());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trimStart());



const url = "https://nitesh.com/nitesh%20kumar"
console.log(url.replace('%20','-'));


console.log(url.includes('nitesh'))
console.log(url.includes('coder'))


const cricket = 'Rohit Gurunath Sharma'
console.log(cricket.split(' '));


// concatination => 
//  console.log(`this is ${name} and i am a coder with repo ${repoCount}`)

// string declaration => 
//  const nickName = new String('nitesh kumar')