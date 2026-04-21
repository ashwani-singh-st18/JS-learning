const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "web dev course",
        price: 2299
    },
     {
        itemName: "mob dev course",
        price: 2399
    },
     {
        itemName: "AI/ML course",
        price: 229
    },
     {
        itemName: "Gen AI course",
        price: 2
    },
     {
        itemName: "html course",
        price: 26259
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
},0)

console.log(priceToPay)