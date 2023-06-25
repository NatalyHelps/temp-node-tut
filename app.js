// GLOBALS -- NO WINDOW
//module
// __dirname - path to current directory
//__filname -filename
//require = function to use modules (CommonJS)
// module -info about current module (file)
// process - info about env where the program is being executed
// node uses commonJS library under the hood
// every file in node is a module
// MODULEs -encapsulated code (only share minimum)
// BUILT IN MODULES: OS, PATH, FS, HTTP
// when you import a module you actually invoke it
//serversetup=httpmodule
//LOCAL DEPENDENCY - use it only in this partical project
//LOCAL DEPENDENCY would be npm i <packageName>
//GLOBAL DEPENDENCY npm install -g 
//package.json = manifest file stores important info about our project/package
//manual approach - create a package json in the root or use npm init
//if you publish a package the name has to be unique
const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);



