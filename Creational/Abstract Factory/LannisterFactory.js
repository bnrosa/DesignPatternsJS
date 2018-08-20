const Dwarf = require('./Dwarf');
class LannisterFactory {

    getKing (){
        return new KingJoffrey();
    }
    getHandOfKing(){
        return new Dwarf();
    }
  }

module.exports = LannisterFactory;