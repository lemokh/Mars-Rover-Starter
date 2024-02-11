const { Command, moveCommand, modeCommand } = require("../command.js");

// NOTE: do NOT edit grading tests

describe("Command class", function () {
  it(`throws error if command type is NOT passed into constructor as the first parameter`, function () {
    expect(function () {
      new Command();
    }).toThrow(new Error("Command type required."));
  });
  // confirms that Command() returns obj with arg1 as obj.commandType
  test(`constructor sets command type`, function () {
    expect(moveCommand.commandType).toBe("MOVE");
  });
  // confirms that Command() returns obj with arg2 as obj.value
  test(`constructor sets a value passed in as the 2nd argument`, function () {
    expect(moveCommand.value).toBe(12000);
  });
});
// ----------------------------------------------------------------------------------------------
// {MOVE:	Number --> updates rover position value -->	{completed: true}

// {MODE_CHANGE:	String --> updates rover mode value -->	{completed: true}

// {STATUS_CHECK --> No value to update
// --> {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}}
// --> key values for mode, generatorWatts, & position depend on rover's current state

// completed response key value will be false if command was NOT completed

// Mode	Restrictions
// LOW_POWER:	Unable to move in this state
// NORMAL: None
