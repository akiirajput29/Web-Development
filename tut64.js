const fs = require("fs");
let text = fs.readFileSync("Akii.html", "utf-8");
text = text.replace("good", "Akhil");

console.log("The content of the file is");
console.log(text);


console.log("Creating a new file...");
fs.writeFileSync("Akhil.html", text);