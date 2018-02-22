var TextField = require("tns-core-modules/ui/text-field");
var Observable = require("data/observable").Observable;
var Flyd = require("flyd");
var R = require("ramda");


function createViewModel() {
    var viewModel = new Observable();

    viewModel.milageLabel = "Enter a milage or take a picture of the dashboard with your phone.";
    viewModel.startDate = '';
    viewModel.endDate = '';
    viewModel.notes = '';
    viewModel.startMilage = '';
    viewModel.endMilage = '';
    viewModel.totalDistance = '';
    viewModel.amount = 70.00;

    return viewModel;
}

exports.createViewModel = createViewModel;
