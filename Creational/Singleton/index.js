const Singleton = require('./Singleton');
let first = new Singleton('equals');
let second = new Singleton('shit');
let third = Singleton.getInstance('different');
console.log(first === second);
console.log(second == third);