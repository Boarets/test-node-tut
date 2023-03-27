//GLOBALS - NODE HAS NO WINDOW

// __dirname  - path no current directory
// _filename  - file name
// require    - function to use module (CommonsJS)
// module     - info about current module (file)
// process    - info about env there the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('Hello World')
}, 1000)