const state = {
    startDate: new Date(),
    endDate: new Date(),
    notes: '',
    startMilage: 0.00,
    endMilage: 0.00,
    totalDistance: 0.00,
    amount: 0.00
}

const mutations = {
    updateStartDate(state, payload) {
        state.startDate = payload;
    },
    updateStartMilage(state, payload) {
        state.startMilage = payload;
    },
    updateEndMilage(state, payload) {
        state.endMilage = payload;
    }
}

const trip = {
  state,
  mutations
}

module.exports = trip;
