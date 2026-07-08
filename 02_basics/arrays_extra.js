const marvelHeros = ["ironman", "thor", "spiderman"]
const dcHeros = ["superman", "batman", "flash"]

// push() => add new array as an index value to existing array 

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

//concat() => merge two arrays together and return a new array 

// const newHeros = marvelHeros.concat(dcHeros)
// console.log(newHeros);

// spread operator combines more than one array [...arr1, ...arr2, ...arr3]

// const allHeros = [...marvelHeros, ...dcHeros] 
console.log([...marvelHeros, ...dcHeros])
// console.log(allHeros);


const anotherArr = [1, 2, 3, [4, 5, 6], 7 , [6, 7, [4, 5]]]

// flat(depth) => used to concatinate depthed array in a single array

const realAnotherArray = anotherArr.flat(2)

// console.log(realAnotherArray)


// console.log(Array.isArray("Nitesh"))
// console.log(Array.from("Nitesh"))

// console.log(Array.from({name:"Nitesh"})) // interesting => return empty array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))   //concatinate values as array

// console.log(Array.from(score1, score2, score3)) // doesn't work 