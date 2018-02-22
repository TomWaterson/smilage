// A sample Jasmine test
const mainViewModel = require('../main-view-model');
describe("Hello World Sample Test:", function() {
  it("Check callToAction.", function() {
    expect(mainViewModel.createViewModel().callToAction).toEqual("Choose an action"); //Check if the counter equals 42.
  });
  it("Check message.", function () {
    expect(mainViewModel.createViewModel().startText).toBe("Start a new trip"); //Check if the message is "42 taps left".
  });
});
