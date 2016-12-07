// YOUR CODE GOES HERE
let SpaceShip = require('./spaceship');
let CrewMember = require('./CrewMember');

let ourShip = new SpaceShip('Rocket Power');
let crewNames = ['Yonatan', 'Tom', 'Tori', 'Francis', 'Dino', 'Chris', 'Kate', 'Dan', 'Audrey', 'NICK'];
let crewObjects = [];

let launchpad = (ship,crew) => {
  console.log('Houston, we have no problems!');
  console.log(`${ship.name} is about to launch!`);
  ship.loadCrew(crew);
};


let trainCrew = (crew) => {
  for(let crewMember of crew){
    crewMember = new CrewMember(crewMember);
    crewMember.trained = true;
    crewObjects.push(crewMember);
  }
};

trainCrew(crewNames);
launchpad(ourShip,crewObjects);
