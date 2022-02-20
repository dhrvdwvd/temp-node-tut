// Built-in modules: os path http fs
const os = require("os");

// info about current user
const usr = os.userInfo();
console.log(usr);

// info about system up time
console.log(os.uptime() / 3600);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
