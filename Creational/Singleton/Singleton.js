module.exports = class Singleton {
    constructor(stuff){
        if(!Singleton.instance){
            this.stuff = stuff;            
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    static getInstance(stuff) {
        return new Singleton(stuff);
    }
}