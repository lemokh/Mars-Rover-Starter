// NOTE: do NOT edit grading tests
//  TDD: write a test for each feature, then a class to pass each test
const Command = require("../command.js");
const Message = require("../message.js");

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let message = new Message("TEST NAME", commands);

describe("Message class", function () {
  it(`throws error if Message instance has no args`, () => {
    expect(function () {
      new Message();
    }).toThrow(new Error(`Message name required.`));
  });
  // confirms Message(arg1) returns obj with arg1 as obj.name
  test(`constructor sets name`, () => {
    expect(message.name).toBe("TEST NAME");
  });
  // confirms Command(arg1, arg2) returns obj with arg2 as obj.commands
  test(`constructor sets a value passed in as the 2nd argument`, function () {
    expect(message.commands).toBe(commands);
  });
});
