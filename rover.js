// Rover receives a message object to update its key values
// rover = { position, mode, generatorWatts, receiveMessage() }
class Rover {
	constructor(position, mode = "NORMAL", watts = 110) {
		this.position = position;
		this.mode = mode; // mode: "LOW_POWER" prevents "MOVE" commands from updating rover position
		this.generatorWatts = watts;
	}
	// updates rover object key values
	// returns response object with at least two keys: message name & results array
	receiveMessage(messageObj) {
		const responseObj = {
			message: messageObj.name, // message name
			results: [],
		};

		// handles each command type
		// populates response.results array with expected command results
		messageObj.commands.forEach((command) => {
			if (command.commandType === "MODE_CHANGE") {
				this.mode = command.value;
				responseObj.results.push({ completed: true });
			}
			// updates rover command completed response to false
			// if move command occurs during low power mode
			else if (command.commandType === "MOVE") {
				if (this.mode === "LOW_POWER") {
					responseObj.results.push({ completed: false });
				} else {
					this.position = command.value;
					responseObj.results.push({
						completed: true,
					});
				}
			} else if (command.commandType === "STATUS_CHECK") {
				responseObj.results.push({
					completed: true,
					roverStatus: {
						position: this.position,
						mode: this.mode,
						generatorWatts: this.watts || 110,
					},
				});
			}
		});
		// console.log("RESPSONSEobj:", responseObj);
		return responseObj;
	}
}

module.exports = Rover;

// console.log(JSON.stringify(response, null, 2));
