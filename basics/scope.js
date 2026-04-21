if(true){
    const username = "ash";
    if(username === "ash"){
        const website = "youtube"
        console.log(username + website)
    }
    // I can't access the website here because "website" is out of scope and it will give us error

}
// I can't access username here !!



// Hoisting

addOne(5)    // ----------------------- accessing it before function declaration it will work fine.

function addOne(num){
    return num + 1;
}

addTwo(5)  // -------------------- This will give us an error becaue this time we are holding a function in a variable this is in the Memory phase right now


const addTwo = function(num2){
    return num2 + 1
}