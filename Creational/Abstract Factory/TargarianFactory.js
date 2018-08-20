const LordConnington = require( './LordConnington');
class TargaryanFactory {

    getKing (){
        return new KingAerys();
    }
    getHandOfKing(){
        return new LordConnington();
    }
  }

module.exports = TargaryanFactory;