const Vue = require('nativescript-vue');
const Vuex = require('vuex');
const trip = require('./modules/trip');

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        trip
    }
})

module.exports = store;
