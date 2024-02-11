//  TDD: write a test for each feature, then a class to pass each test
const Command = require("./command");

// Message object has a name & a commands array containing Command objects
// Message bundles then delivers commands to rover
class Message {
  constructor(name, commands) {
    this.name = name; // string
    this.commands = commands; // array of Command objects

    if (!name) {
      throw Error(`Message name required.`);
    }
  }
}

module.exports = Message;
