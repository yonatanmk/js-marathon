// YOUR CODE GOES HERE
let SpaceShip = require('./spaceship');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket');

let ourShip = new SpaceShip('Rocket Power');
let crewNames = ['Yonatan', 'Tom', 'Tori', 'Francis', 'Dino', 'Chris', 'Kate', 'Dan', 'Audrey', 'NICK'];
let crewObjects = [];

let launchpad = (ship,crew,rocket) => {
  console.log('Houston, we have no problems!');
  console.log(`${ship.name} is about to launch!`);
  ship.loadCrew(crew);

  console.log(`Our trusty leader is ${ship.captain().name}!`);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(394);
  countdown(10);
  ship.takeoff();
};


let trainCrew = (crew) => {
  for(let crewMember of crew){
    crewMember = new CrewMember(crewMember);
    crewMember.trained = true;
    crewObjects.push(crewMember);
  }
};

let countdown = (int) => {
  let countdownthing = setTimeOut(1000);
  if(int === 0) {
    console.log('BLASTOFFFFFF!!!!');
  } else {
    return countdownthing;
    console.log(int);
    countdown(int-1);
  }
};

trainCrew(crewNames);
launchpad(ourShip,crewObjects,rocket);
