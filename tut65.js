// Asynchronous
const fs = require("fs");
fs.readFile("Akii.html", "utf-8", (err, data) => {
    console.log(data);
});
console.log("This is a message");