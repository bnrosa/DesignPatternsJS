const Tournament = require ('./Tournament.js');
const TournamentBuilder = require ('./TournamentBuilder.js');
const BaratheonTournamentBuilder = require ('./BaratheonTournamentBuilder.js');


let baraTour = new BaratheonTournamentBuilder();
//Tournament builder builds Tournament objects
let tournament = new TournamentBuilder(baraTour);
console.log(tournament.attendees[0].name);
