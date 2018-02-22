/*
viewModel.startDate = '';
viewModel.endDate = '';
viewModel.notes = '';
viewModel.startMilage = '';
viewModel.endMilage = '';
viewModel.totalDistance = '';
viewModel.amount = 70.00;
*/

const state = {
    count: 42
}

const mutations = {
    decrement(state) {
        state.count--
    }
}

const counter = {
  state,
  mutations
}

module.exports = counter;
