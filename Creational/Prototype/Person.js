module.exports = class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    clone() {
        let clone = new Person();
        for (let prop in this){
            clone[prop] = this[prop];
        }
        return clone;
    }
}