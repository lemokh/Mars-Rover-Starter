// NOTE: do NOT edit the grading tests
const Command = require("../command.js");
const Message = require("../message.js");
const Rover = require("../rover.js");

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"), // needs to push {completed: true}
  new Command("STATUS_CHECK"),
  // new Command("MOVE", 200),
];

let rover = new Rover(98382); // 98382 as arg1 sets rover's position
// { position: #, mode: '', generatedWatts: # }
console.log("ROVER:", rover);

let message = new Message("Test message with two commands", commands);
// { name: '', commands: [] }
console.log("MESSAGE:", message);

let response = rover.receiveMessage(message);
// { message: '', results: [] }
console.log("RESPONSE:", response);
console.log(message.commands.length, message.commands);

/*  EXPECTED ROVER RESPONSE OBJECT:
{ message: 'Test message with two commands',
  results: [
    { completed: true },
    { completed: true,
      roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
    }
  ]
} */

// 7 TESTS
describe("Rover class", function () {
  test(`constructor sets position and default values for mode and generatorWatts`, () => {
    console.log("ROVER.POSITION", rover.position);
    // expect(rover.position).toBe();
    expect(rover.mode).toBe("NORMAL");
    // expect(rover.mode).toBe("LOW_POWER");
    expect(rover.generatorWatts).toBe(110);
  });
  test(`response returned by receiveMessage contains the name of the message`, () => {
    expect(response.message).toBe("Test message with two commands");
  });
  test(`response returned by receiveMessage includes two results if two commands are sent in the message`, () => {
    // WHY ARE THESE NOT BE THE SAME LENGTH?
    console.log(response.results.length, response.results);
    console.log(message.commands.length, message.commands);
    expect(response.results.length).toBe(message.commands.length);
  });
  test(`responds correctly to the status check command`, () => {
    message.commands.forEach((command, index) => {
      if (command.commandType === "STATUS_CHECK") {
        console.log("index:", index, "command:", command);
        expect(response.results[index].roverStatus.position).toBe(
          rover.position
        );
        expect(response.results[index].roverStatus.mode).toBe(rover.mode);
        expect(response.results[index].roverStatus.generatorWatts).toBe(
          rover.generatorWatts
        );
      }
    });
  });
  test(`responds correctly to the mode change command`, () => {
    //  check response.completed & rover.mode for accuracy
    message.commands.forEach((command, index) => {
      if (command.commandType === "MODE") {
        expect(response.results[index].completed).toBe(true);
        expect(rover.mode).toBe(command.value);
      }
    });
  });
  test(`responds with a false completed value when attempting to move in LOW_POWER mode`, () => {
    message.commands.forEach((command, index) => {
      if (command.commandType === "MOVE") {
        if (response.results[index].roverStatus.mode === "LOW_POWER") {
          expect(response.results[index].completed).toBe(false);
        }
      }
    });
  });
  test(`responds with the position for the move command`, () => {
    message.commands.forEach((command) => {
      if (command.commandType === "MOVE") {
        expect(rover.position).toBe(command.value);
      }
    });
  });
});
