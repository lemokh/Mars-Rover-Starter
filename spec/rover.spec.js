// NOTE: do NOT edit the grading tests
const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // 98382 is rover's new position.
let response = rover.receiveMessage(message);

console.log(response);

describe("Rover class", function () {
  // WRITE 7 TESTS
  test(`constructor sets position and default values for mode and generatorWatts`, () => {
    expect(response.position).toBe();
    expect().toBe();
  });
  test(`response returned by receiveMessage contains the name of the message`, () => {
    expect().toBe();
  });
  test(`response returned by receiveMessage includes two results if two commands are sent in the message`, () => {
    expect().toBe();
  });
  test(`responds correctly to the status check command`, () => {
    expect().toBe();
  });
  test(`responds correctly to the mode change command`, () => {
    expect().toBe();
  });
  test(`responds with a false completed value when attempting to move in LOW_POWER mode`, () => {
    expect().toBe();
  });
  test(`responds with the position for the move command`, () => {
    expect().toBe();
  });
});

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
