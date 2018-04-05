import axios from 'axios';

const state = {
    startDate: new Date(),
    endDate: new Date(),
    title: 'Manly',
    notes: 'Cool stuff happened',
    startMilage: 0.00,
    endMilage: 0.00,
    totalDistance: 0.00,
    amount: 0.00,
    travelState: 'naming',
    trips: [],
    journeyData: [
    {
        id: 'naming',
        action: 'New trip',
        title: 'Where are you going?',
        hint: 'Name your trip',
        input: '',
        button: 'Next',
        next: 'starting'
    },
    {
        id: 'starting',
        action: 'Start of your trip',
        title: 'What does your odometer say now?',
        hint: 'Starting odometer reading',
        input: '',
        button: 'Next',
        next: 'waiting'
    },
    {
        id: 'waiting',
        action: 'Enjoy your trip',
        title: 'We\'ll wait here until you\'ve finished driving',
        image: 'res://icon',
        button: 'Next',
        next: 'ending'
    },
    {
        id: 'ending',
        action: 'End of your trip',
        title: 'What does your odometer say now?',
        hint: 'Ending odometer reading',
        input: '',
        button: 'Save Trip',
        next: 'home'
    }]
};

const mutations = {
    updateTravelState(state, payload) {
        state.travelState = payload;
    },
    updateStartDate(state, payload) {
        state.startDate = payload;
    },
    updateStartMilage(state, payload) {
        state.startMilage = payload;
    },
    updateEndMilage(state, payload) {
        state.endMilage = payload;
    },
    updateTrips(state, payload) {
        state.trips = payload;
    }
};

const actions = {
    fetchTrips ({ commit }) {
        axios.get('http://10.0.2.2:3000/api/trips')
        .then((response) => {
            commit('updateTrips', response.data)
        })
        .catch((err) => console.log(err))
    }
};

const trip = {
    state,
    mutations,
    actions
};

module.exports = trip;
