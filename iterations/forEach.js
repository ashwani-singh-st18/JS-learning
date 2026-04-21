const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((val)=>{
//     console.log(val);
// })


// we can also pass more parameter in it.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


const myCoding = [
    {
        languageName: "javascript",
        lanuguageFileName: "js"
    },
    {
        languageName: "java",
        lanuguageFileName: "java"
    },
    {
        languageName: "python",
        lanuguageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} => ${item.lanuguageFileName}`);
})
    