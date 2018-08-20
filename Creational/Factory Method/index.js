const GodDeterminant = require('./GodDeterminant');
const GodFactory = require('./GodFactory');

let ohMyGod = new GodDeterminant('sevenGods', 'navigation');
let god = new GodFactory(ohMyGod);
console.log(god.prayTo());