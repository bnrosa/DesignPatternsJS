let instance = null;
module.exports = class Singleton {
   
    static get instance(){
        return instance;
    }

    static set instance(_instance){
        this.instance = _instance;
    }
    
    constructor(stuff){
        if(instance == null){
            instance = this;
            this.stuff = stuff;
        }
        return instance;
    }

    static getInstance() {
        return new Singleton();
    }
}