let rocket = {
  fuel: 0,
  addFuel (fuelAmount) {
    this.fuel += fuelAmount;
    console.log(`Your rocket now has ${this.fuel} gallons of fuel. Yay.`);
  },
  fire() {
    if (this.fuel > 0) {
      this.fuel -= 1;
      console.log(`Rockets have fired! ${this.fuel} gallons of fuel remaining!!!!`);
      return true;
    }
    else {
      console.log("There's no fuel dummy!!!!?!!!");
      return false;
    }
  }
};

module.exports = rocket;
