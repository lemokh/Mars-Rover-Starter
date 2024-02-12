//  create a command, convert to message, send to rover
//  return rover's response

//  new Command() returns object with commandType key to instruct the rover

//  do not modify
class Command {
  constructor(commandType, value) {
    //  commandType options:
    //    'MODE_CHANGE' (arg2 string) || 'MOVE' (arg2 number)|| 'STATUS_CHECK' (no arg2)
    this.commandType = commandType;
    this.value = value;

    if (!commandType) {
      throw Error("Command type required.");
    }
    // return { commandType, value };
  }
}
// ----------------------------------------------------------------------------------------------
module.exports = Command;
// ----------------------------------------------------------------------------------------------
// {MOVE --> updates rover position number -->	returns {completed: true}, if mode is normal

// {MODE_CHANGE --> updates rover mode string -->	returns {completed: true}

// {STATUS_CHECK --> no arg2, no update
// --> returns { completed: true,
//               roverStatus: {mode: 'NORMAL' || 'LOW_POWER', generatorWatts: 110, position: someNumber }
//             }
// --> mode, generatorWatts, & position values depend on rover's current state

// if ( rover.mode === 'LOW_POWER') {
//    if ( commndType === 'MOVE') {
//      return {completed: false}
//    }
// }
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
