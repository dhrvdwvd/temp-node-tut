const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result1) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result1;
        writeFile(
          "./content/result-async.txt",
          `${first} ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("done");
            }
          }
        );
      }
    });
  }
});
console.log("starting next one");
