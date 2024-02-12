// NOTE: do NOT edit grading tests
const Command = require("../command.js");

let moveCommand = new Command("MOVE", 12000);

describe("Command class", function () {
  it(`throws error if a command type is NOT passed into the constructor as the first parameter`, function () {
    expect(function () {
      new Command();
    }).toThrow(new Error("Command type required."));
  });
  // confirms Command(arg1) returns obj with arg1 as obj.commandType
  test(`constructor sets command type`, function () {
    expect(moveCommand.commandType).toBe("MOVE");
  });
  // confirms Command(arg1, arg2) returns obj with arg2 as obj.value
  test(`constructor sets a value passed in as the 2nd argument`, function () {
    expect(moveCommand.value).toBe(12000);
  });
});
// ----------------------------------------------------------------------------------------------
// {MOVE:	Number --> updates rover position value -->	{completed: true}

// {MODE_CHANGE:	String --> updates rover mode value -->	{completed: true}

// {STATUS_CHECK --> No value to update
// --> {completed: true, roverStatus: { position: 87382098, mode: 'NORMAL', generatorWatts: 110}}
// --> key values for mode, generatorWatts, & position depend on rover's current state

// completed response key value will be false if command was NOT completed

// Mode	Restrictions
// LOW_POWER:	Unable to move in this state
// NORMAL: None
