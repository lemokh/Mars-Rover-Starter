const Command = require("./command");

// Message obj has a name & contains several Command objects
// Message class bundles & delivers commands to rover
class Message extends Command {
  constuctor(name) {
    this.name = name;
  }
}

module.exports = Message;

//  write: a test for each feature
//  then a class to pass each test
