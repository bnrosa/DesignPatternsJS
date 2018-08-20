const Singleton = require('./Singleton');
let s1 = new Singleton('equals');
let s2 = Singleton.getInstance();
let s3 = new Singleton ('different')
console.log(s1.stuff +" = "+ s2.stuff+" = "+ s3.stuff);