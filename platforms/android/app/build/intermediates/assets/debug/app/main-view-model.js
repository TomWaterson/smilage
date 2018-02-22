var Observable = require("data/observable").Observable;
var Flyd = require("flyd");
var R = require("ramda");

var getMessage = (counter) => {
    var fn = R.cond([
        [R.lt(0), (counter) => counter],
        [R.T, R.always(0)]
    ]);
    return fn(counter);
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.callToAction = "Choose an action";
    viewModel.startText = "Start a new trip";
    return viewModel;
}

exports.createViewModel = createViewModel;
