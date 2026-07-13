// for each loop

["" , "" , ""]
[{}, {}, {}]

const coding = ['js' , 'ruby', 'py', 'java', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (items) => {
//     console.log(items);
    
// } )


// function printMe (item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr);
    
} )


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java "
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageFileName);
    
} )