const Person = require('./Person');

let p1 = new Person('Jhon', 15);
let p2 = p1.clone();
p2.age = 18;
let p3 = p2.clone();

//Testing
console.log(p1.age != p2.age);
console.log(p1.name === p2.name);
console.log(p2.age === p3.age);