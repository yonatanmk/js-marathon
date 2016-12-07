class Spaceship {
  constructor(name){
    this.name = name;
    this.crew = [];
  }

  loadCrew(crew) {
    for (let person of crew) {
      this.crew.push(person);
      console.log(`${person.name} has boarded!`);
    }
  }

  captain(){
    let number = this.crew.length;
    let randoumber = Math.floor(Math.random() * number);
    return this.crew[randoumber];
  }

}

module.exports = Spaceship
