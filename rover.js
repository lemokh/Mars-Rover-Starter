// Rover receives a message object to update its key values
// rover = { position, mode, generatorWatts, receiveMessage() }
class Rover {
  constructor(position, mode = "NORMAL", watts = 110) {
    this.position = position;
    this.mode = mode; // mode: "LOW_POWER" prevents "MOVE" commands from updating rover.position
    this.generatorWatts = watts;
  }
  // updates rover object key values
  // returns response object with at least two keys: message name & results array
  // results array begins with { completed: true }
  receiveMessage(messageObj) {
    // rover response only returns {completed: true}
    // each command returns {}
    let response = { completed: true };
    // updates response.completed to false if move command occurs during low power mode
    messageObj.commands.forEach((command) => {
      if (command.commandType === "MOVE") {
        if (this.mode === "LOW_POWER") {
          response.completed = false;
        }
      }
    });
    response.message = messageObj.name; // message name
    response.results = [];

    return response; // response.results[0] is {completed: true,}
  }
}
// let messageObj = new Message();
// console.log(Rover(messageObj));

module.exports = Rover;

/*
let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  --> updates rover mode to 'LOW_POWER' & returns { completed: true }

  new Command("STATUS_CHECK"),
  --> returns { completed: true, roverStatus: {position: '', mode: @#,generatorWatts: } }
];

let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // 98382 is rover's new position.
let response = rover.receiveMessage(message);

console.log(response);

ROVER RETURNS RESPONSE OBJECT:
{
   message: 'Test message with two commands',
   results: [
     { --> first command rover response
         completed: true
      },
      { --> second command rover response
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

==========================================================================================

expect(received).toBeTruthy()

Received: undefined

let response = rover.receiveMessage(message);

expect(response.message).toEqual("TA power");
expect(response.results[0].completed).toBeTruthy();
expect(response.results[1].roverStatus.position).toEqual(4321);
expect(response.results[2].completed).toBeTruthy();
*/
