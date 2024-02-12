// NOTE: do NOT edit the grading tests
const Command = require("../command.js");
const Message = require("../message.js");
const Rover = require("../rover.js");

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let rover = new Rover(98382); // 98382 is rover's new position
let message = new Message("Test message with two commands", commands);
let response = rover.receiveMessage(message);
/*  OUTPUTS:
{ message: 'Test message with two commands',
  results: [
    { completed: true },
    { completed: true,
      roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 } }
  ]
} */
console.log("rover:", rover);
// rover: Rover { position: undefined, mode: 'NORMAL', generatorWatts: 110 }
console.log("message:", message);
/*  message: Message {
      name: 'Test message with two commands',
      commands: [
        Command { commandType: 'MODE_CHANGE', value: 'LOW_POWER' },
        Command { commandType: 'STATUS_CHECK', value: undefined }
      ]
    } */
console.log("response:", response);
/*  response: {
      message: 'Test message with two commands',
      results: [
        Command { commandType: 'MODE_CHANGE', value: 'LOW_POWER' },
        Command { commandType: 'STATUS_CHECK', value: undefined }
      ]
    }  */
//  response.results[0].completed

describe("Rover class", function () {
  // WRITE 7 TESTS
  test(`constructor sets position and default values for mode and generatorWatts`, () => {
    expect(rover.position).toBe(98382); // UNDEFINED
    expect(rover.mode).toBe("LOW_POWER");
    expect(rover.generatorWatts).toBe(110);
  });
  test(`response returned by receiveMessage contains the name of the message`, () => {
    expect(response.message).toBe("Test message with two commands");
  });
  test(`response returned by receiveMessage includes two results if two commands are sent in the message`, () => {
    if (message.commands.length === 2) {
      expect(response.results.length).toBe(2);
    }
  });
  test(`responds correctly to the status check command`, () => {
    // commandType === 'STATUS_CHECK'
    // { completed: true,
    // roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 } }

    // For the STATUS_CHECK command, receiveMessage(message).results includes
    // a roverStatus object describing the current state of the rover object —
    // --- mode, generatorWatts, and position --- check each of these for accuracy

    // expect(response.results[1].roverStatus).toEqual({
    //    mode: "LOW_POWER",
    //    generatorWatts: 110,
    //    position: 98382,
    // });
    //  UNDEFINED
    expect(response.results[1].roverStatus.mode).toBe("LOW_POWER");
    expect(response.results[1].roverStatus.generatorWatts).toBe(110);
    expect(response.results[1].roverStatus.position).toBe(98382);
  });
  test(`responds correctly to the mode change command`, () => {
    // how 'MODE_CHANGE' updates rover? --> no value to update
    // --> roverStatus = {!!mode!!, position, generatorWatts}

    expect().toBe();
  });
  test(`responds with a false completed value when attempting to move in LOW_POWER mode`, () => {
    if (
      message.name === "MOVE" &&
      response.results[1].roverStatus.mode === "LOW_POWER"
    ) {
      response.completed = false;
    }
    // expect().toBe();
  });
  test(`responds with the position for the move command`, () => {
    expect().toBe();
  });
});
