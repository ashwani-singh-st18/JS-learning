const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums)


// we can also use for-each loop as well
const newNums2 = []
myNums.forEach((num)=>{
    if(num > 4){
        newNums2.push(num)
    }

})
console.log(newNums2)