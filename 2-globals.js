// Globals:
// __dirname  : current directory path
// __filename : current file name
// require    : function to use modules (CommonJS)
// module     : info about current module (file)
// process    : info about the env where program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
