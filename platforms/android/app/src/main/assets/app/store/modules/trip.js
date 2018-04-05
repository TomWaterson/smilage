const state = {
    startDate: {
        day: '',
        month: '',
        year: ''
    },
    endDate: new Date(),
    notes: '',
    startMilage: 0.00,
    endMilage: 0.00,
    totalDistance: 0.00,
    amount: 0.00
}

const mutations = {
    updateStartField(state) {
        state.startDate = state;
    }
}

const trip = {
  state,
  mutations
}

module.exports = trip;
