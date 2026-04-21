// For storing uniqure key -> value pair
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

// console.log(map);

// iterating through for-of loop
for(const [key, value] of map){
    console.log(key, ":-", value);
}