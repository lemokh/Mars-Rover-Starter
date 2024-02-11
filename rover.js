const Message = require("./message");

let message = new Message();

// Rover receives message object to update its key values & return updated rover obj
// rover obj has position, mode, generatorWatts, & receiveMessage() to update its key values
class Rover {
  constructor(messageObj) {
    this.position = messageObj.position;
    this.mode = "NORMAL";
    this.generatorWatts = messageObj.generatorWatts || 110;
  }
  receiveMessage(messageObj) {
    let updatedRoverObj = {};
    // returns object with at least two keys: message & results
    updatedRoverObj.message = messageObj.name; // name of original Message object
    updatedRoverObj.results = messageObj.commands; // array of Command objects
    return updatedRoverObj;
  }
}

module.exports = Rover;

/*
let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // Passes 98382 as the rover's position.
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
*/
