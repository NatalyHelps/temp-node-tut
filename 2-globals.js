// GLOBALS -- NO WINDOW
//module
// __dirname - path to current directory
//__filname -filename
//require = function to use modules (CommonJS)
//module -info about current module (file)
//process - info about env where the program is being executed
// node uses commonJS library under the hood
// every file in node is a module
//MODULE

console.log(__dirname)
setInterval(()=> {
    console.log('hello world')
}, 1000)