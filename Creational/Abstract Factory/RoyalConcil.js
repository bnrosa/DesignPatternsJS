module.exports = class RoyalConcil {
    constructor(abstractFactory) {
      this.abstractFactory = abstractFactory;
      this.COMPLAINT_THRESHOLD = 10;
    }

    startSession(complaint){
        if(complaint > this.COMPLAINT_THRESHOLD){
            return this.abstractFactory.getKing();
        }
        else{
            return this.abstractFactory.getHandOfKing();
        }
    }
  }