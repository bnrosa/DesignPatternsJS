module.exports = class Ship {

    constructor(){
        this.rudderAngle = 90;
        this.sail1 = 90;
        this.sail2 = 90;
        this.configuration = 'default';
        this.speed = 100;
    }

    setRudderAngleTo(angle){
        this.rudderAngle = angle;
    }
    setSailConfiguration(configuration){
        this.configuration = configuration;
    }
    setSailAngle(sailId, angle){
        if(sailId == 1){
            this.sail1 = angle;
        }
        if(sailId == 2){
            this.sail2 = angle;
        }
    }
    getCurrentBearing(){
        return {rudderAngle: this.rudderAngle, sail1: this.sail1, sail2 = this.sail2};
    }

    getCurrentSpeedEstimate(){
        return this.speed;
    }
}