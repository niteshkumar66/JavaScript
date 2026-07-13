// reduce method

const myNums = [1 , 2 , 3]

// const myTotal = myNums.reduce(function (acc , curVal) {
//     console.log(`acc: ${acc} and currval: ${curVal}`);
    
//     return acc + curVal
// }, 0)

// const myTotal = myNums.reduce( (acc, curVal) => acc+curVal , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS",
        price : 2999,
    },
    {
        itemName : "PY",
        price : 999,
    },
    {
        itemName : "Mobile Dev",
        price : 5999,
    },
    {
        itemName : "Data science",
        price : 11999,
    },
]

const cartTotal = shoppingCart.reduce((acc, item) => acc+item.price , 0)
console.log(cartTotal);

