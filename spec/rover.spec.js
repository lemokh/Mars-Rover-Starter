// NOTE: do NOT edit the grading tests
const Command = require("../command.js");
const Message = require("../message.js");
const Rover = require("../rover.js");

const commands = [
	new Command("MODE_CHANGE", "LOW_POWER"),
	new Command("STATUS_CHECK"),
];

const rover = new Rover(98382); // 98382 as arg1 sets rover's position
// { position: #, mode: '', generatedWatts: # }

const message = new Message("Test message with two commands", commands);
// { name: '', commands: [] }

const response = rover.receiveMessage(message);
// { message: '', results: [] }

/*  EXPECTED ROVER RESPONSE OBJECT:
{ message: 'Test message with two commands',
  results: [
    { completed: true },
    { completed: true,
      roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
    }
  ]
} */

describe("Rover class", function () {
	test(`constructor sets position and default values for mode and generatorWatts`, () => {
		expect(rover.position).toBe(98382);
		expect(rover.mode).toBe("LOW_POWER");
		expect(rover.generatorWatts).toBe(110);
	});
	test(`response returned by receiveMessage contains the name of the message`, () => {
		expect(response.message).toBe("Test message with two commands");
	});
	test(`response returned by receiveMessage includes two results if two commands are sent in the message`, () => {
		expect(response.results.length).toBe(message.commands.length);
	});
	test(`responds correctly to the status check command`, () => {
		message.commands.forEach((command, index) => {
			if (command.commandType === "STATUS_CHECK") {
				expect(response.results[index].roverStatus.position).toBe(
					rover.position
				);
				expect(response.results[index].roverStatus.mode).toBe(
					rover.mode
				);
				expect(response.results[index].roverStatus.generatorWatts).toBe(
					rover.generatorWatts
				);
			}
		});
	});
	test(`responds correctly to the mode change command`, () => {
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
