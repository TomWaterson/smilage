const state = {
    count: 42,
    startDate: new Date(),
    endDate: new Date(),
    notes: '',
    startMilage: 0.00,
    endMilage: 0.00,
    totalDistance: 0.00,
    amount: 0.00
}

const mutations = {
    decrement(state) {
        state.count--;
    },
    
    increment(state) {
        state.startDate = state;
    }
}

const trip = {
  state,
  mutations
}

module.exports = trip;
