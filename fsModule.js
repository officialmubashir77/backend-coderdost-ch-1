// console.log("hello");

// require is a common js module and import is a esm ( ecma script module ) module

const sum = require('./separate');
const subtract = require('./separate');

console.log(sum(5, 5)); // Output: 8
console.log(subtract(10, 5)); // Output: 5

// file system module
const fs = require('fs');

let dataOutput = fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log(dataOutput);
