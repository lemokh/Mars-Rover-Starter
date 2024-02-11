//  create a command, convert to message, send to rover
//  send rover's response to command center

//  new Command() returns object with commandType key to instruct the rover

//  do not modify
class Command {
  constructor(commandType, value) {
    //  commandType options: 'MODE_CHANGE' || 'MOVE' || 'STATUS_CHECK'
    this.commandType = commandType;
    this.value = value;

    if (!commandType) {
      throw Error("Command type required.");
    }
  }
}
// ----------------------------------------------------------------------------------------------
module.exports = Command;
// ----------------------------------------------------------------------------------------------
// {MOVE:	Number --> updates rover position value -->	{completed: true}

// {MODE_CHANGE:	String --> updates rover mode value -->	{completed: true}

// {STATUS_CHECK --> No value to update
// --> {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}}
// --> key values for mode, generatorWatts, & position depend on rover's current state

// completed response key value will be false if command was NOT completed

// Mode	Restrictions
// LOW_POWER:	Can’t be moved in this state
// NORMAL:	None
// ----------------------------------------------------------------------------------------------
// if (commandType === "MOVE") {
//   if (typeof value !== "number") {
//     throw Error("wrong value type");
//   }
// }
// if (commandType === "MODE_CHANGE") {
//   if (typeof value !== "string") {
//     throw Error("wrong value type");
//   }
// }
// if (commandType === "STATUS_CHECK") {
//   if (value !== "undefined") {
//     throw Error("wrong value type");
//   }
// }
