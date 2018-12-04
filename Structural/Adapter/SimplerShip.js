const Ship = require("./Ship");
module.exports = class SimplerShip {
  constructor(ship) {
    this.ship = new Ship();
  }

  goLeft() {
    this.ship.sail1 = 30;
    this.ship.sail2 = 30;
  }

  goRight() {
    this.ship.sail1 = 60;
    this.ship.sail2 = 60;
  }

  stop() {
    this.ship.speed = 0;
  }
};
