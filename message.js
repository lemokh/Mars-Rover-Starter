//  TDD: write a test for each feature, then a class instance to pass each test

// Message object has a name & a commands array of Command objects
// Message bundles & delivers commands to rover
class Message {
  constructor(name, commands) {
    this.name = name; // string for name message
    this.commands = commands; // array of Command objects

    if (!name) {
      throw Error(`Message name required.`);
    }
  }
}

module.exports = Message;
