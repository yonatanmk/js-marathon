class Spaceship {
  constructor(name){
    this.name = name;
    this.crew = [];
    this.propulsion = null;
  }

  loadCrew(crew) {
    for (let person of crew) {
      this.crew.push(person);
      console.log(`${person.name} has boarded!`);
    }
  }

  captain(){
    let number = this.crew.length;
    let randomNumber = Math.floor(Math.random() * number);
    return this.crew[randomNumber];
  }
  mountPropulsion(rocket){
    this.propulsion = rocket;
    console.log("The rocket has been mounted");
  }

  takeoff() {
    if (this.propulsion.fire()) {
      console.log('KSHHHHHHHHHHHHHHaerkjfhekfjgbsl!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    } else {
      console.log('Takeoff failed. Please abort mission');
    }
  }
}

module.exports = Spaceship;
