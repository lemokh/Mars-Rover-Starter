const Message = require("./message");

// Rover receives message object to update its key values & return updated rover obj
// rover obj has: position, mode, generatorWatts, & receiveMessage() to update its key values
class Rover {
  constructor(messageObj) {
    this.position = messageObj.position;
    this.mode = "NORMAL"; // or "LOW_POWER" --> prevents "MOVE" commands from updating rover obj
    this.generatorWatts = messageObj.generatorWatts || 110;
  }
  receiveMessage(messageObj) {
    let response = {};
    // returns object with at least two keys: message & results
    response.message = messageObj.name; // name of original Message object
    response.results = messageObj.commands; // array of Command objects

    return response; // response.results[0] is {completed: true,}
  }
}
// let messageObj = new Message();
// console.log(Rover(messageObj));

module.exports = Rover;

/*
let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // 98382 is rover's new position.
let response = rover.receiveMessage(message);

console.log(response);

OUTPUTS:
{
   message: 'Test message with two commands',
   results: [
      {
         completed: true
      },
      {
         completed: true,
         roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
      }
   ]
}

for STATUS_CHECK commandType:

  response.results = [
      {
        completed: true,
        roverStatus: { mode: 'NORMAL', generatorWatts: 110, position: 87382098 }
      }
  ];

mode, generatorWatts, & position depend on rover's current state
*/
