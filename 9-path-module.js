const { log } = require('console');
const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', '/subfolder', 'test.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base)
//test.txt base
const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt');
//path is going to run in different environments so diff computers will have it diff
console.log(absolute);