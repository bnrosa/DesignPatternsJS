const WateryGod = require('./WateryGod');
const AncientGod = require('./AncientGod');
const WarriorGod = require('./WarriorGod');

module.exports = class GodFactory {
    constructor(godDeterminant){
        if(godDeterminant.religionName == 'ancient'){
            return new AncientGod();
        }
        if(godDeterminant.religionName == 'sevenGods'){
            if(godDeterminant.prayerPurpose == 'navigation'){
                return new WateryGod();
            }
            if(godDeterminant.prayerPurpose == 'courage'){
                return new WarriorGod();
            }
        }
        return new DefaultGod();
    }
}

class DefaultGod {
    prayTo() {
        return "bless you, child";
    }
}