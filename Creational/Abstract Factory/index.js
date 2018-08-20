const RoyalConcil = require('./RoyalConcil.js');
const TargaryanFactory = require('./TargarianFactory');
const LannisterFactory = require('./LannisterFactory');

//Get factories
let factory1 = new TargaryanFactory()
let factory2 = new LannisterFactory()
//Use in concils, there are no interfaces in javascript. you can just use duck typing
//If a class 'quarks' then it can pass as a duck
let rConcil1 = new RoyalConcil(factory1);
let rConcil2 = new RoyalConcil(factory2)
let hand = rConcil1.startSession(5);
hand.buyPeople();
hand = rConcil2.startSession(3);
hand.buyPeople();


