const Event = require ('./Event.js');
const Attendee = require ('./Attendee.js');
const Prize = require ('./Prize.js');
const Tournament = require ('./Tournament.js');

module.exports = class BaratheonTournamentBuilder{

    build() {
        let tournament = new Tournament();
        tournament.events.push(new Event("Joust"));
        tournament.events.push(new Event("Melee"));
        tournament.attendees.push(new Attendee("Stannis"));
        tournament.attendees.push(new Attendee("Robert"));
        tournament.prizes.push(new Prize("Golden Medal"));
        return tournament;
    };
}
