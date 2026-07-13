const myObj = {
    js : "javascript",
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple "
}

for (const key in myObj) {
        console.log(key);
     console.log(myObj[key]);
//      console.log(`${key} has the value : ${myObj[key]}`);
}

const programming = ['js' , 'java' , 'py', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "UNITED STATE OF AMERICA")
// map.set('FR', "FRANCE")
// map.set('IN', "INDIA")

// for (const key in map) {
//     console.log(map[key]);
    
// }

