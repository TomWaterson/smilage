import axios from 'axios';
import * as R from 'ramda';
const state = {
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
        next: 'starting',
        validators: ['isNotEmpty'],
        previous: 'home',
        storeKey: 'title'
    },
    {
        id: 'starting',
        action: 'Start of your trip',
        title: 'What does your odometer say now?',
        hint: 'Starting odometer reading',
        input: '',
        button: 'Next',
        next: 'waiting',
        keyboard: 'number',
        validators: ['isNotEmpty', 'isNumber'],
        previous: 'naming',
        storeKey: 'startMilage'
    },
    {
        id: 'waiting',
        action: 'Enjoy your trip',
        title: 'We\'ll wait here until you\'ve finished driving',
        image: '~/images/PandaDriving.png',
        button: 'Next',
        next: 'ending',
        validators: [],
        previous: 'starting'
    },
    {
        id: 'ending',
        action: 'End of your trip',
        title: 'What does your odometer say now?',
        hint: 'Ending odometer reading',
        input: '',
        button: 'Save Trip',
        next: 'home',
        keyboard: 'number',
        validators: ['isNotEmpty', 'isNumber'],
        previous: 'waiting',
        storeKey: 'endMilage'
    }]
};

const mutations = {
    updateTravelState(state, payload) {
        state.travelState = payload;
    },
    updateTrip(state, payload) {
        state[payload.key] = payload.data;
    },
    updateTrips(state, payload) {
        state.trips = payload;
    },
    updateInput(state, payload) {
        state.journeyData.filter(x => x.action === payload.action)[0].input = payload.value;
    }
};

const actions = {
    fetchTrips ({ commit }) {
        axios.get('http://10.0.2.2:3000/api/trips')
        .then((response) => {
            commit('updateTrips', response.data);
        })
        .catch((err) => {
            return [];
        })
    },
    addTrip ({ commit }, payload) {
        let {
            TRIP_ID = null,
            USER_ID = null,
            TRIP_NAME = '',
            START_DATE = null,
            END_DATE = null,
            NOTES = '',
            START_MILAGE = 0,
            END_MILAGE = 0,
            TOTAL_DISTANCE = 0,
            AMOUNT = 0.00
        } = payload || {};

        axios.post('http://10.0.2.2:3000/api/trips', {
            TRIP_ID,
            USER_ID,
            TRIP_NAME,
            START_DATE,
            END_DATE,
            NOTES,
            START_MILAGE,
            END_MILAGE,
            TOTAL_DISTANCE,
            AMOUNT
        })
        .catch((err) => console.log(err))
    },
    editTrip ({ commit }, payload) {
        let {
            TRIP_ID = null,
            USER_ID = null,
            TRIP_NAME = '',
            START_DATE = null,
            END_DATE = null,
            NOTES = '',
            START_MILAGE = 0,
            END_MILAGE = 0,
            TOTAL_DISTANCE = 0,
            AMOUNT = 0.00
        } = payload.data || {};

        if (R.not(R.isNil(TRIP_ID))) {
            return axios.post('http://10.0.2.2:3000/api/trips/edit/' + payload.id, payload.data);
        }
        else {
            console.log(TRIP_ID);
        }
    },
    deleteTrip ({ commit }, payload) {
        return axios.post('http://10.0.2.2:3000/api/trips/delete/' + payload, {});
    }
};

const trip = {
    state,
    mutations,
    actions
};

module.exports = trip;
