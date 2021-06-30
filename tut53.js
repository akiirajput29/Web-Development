console.log("This is Tutorial 53");

function greet(name, greetText = "Greetings from JS") {
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

let name = "Akii";
let name2 = "Nikki";
let name3 = "Rohan";
let name4 = "Shubham";
let greetText = "Good Morning";
greet(name, greetText);
greet(name2, greetText);
greet(name3, greetText);
// let returnVal = greet(name4);
// console.log(returnVal);


let returnVal = sum(1,2,3);
console.log(returnVal);
// console.log(name + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");