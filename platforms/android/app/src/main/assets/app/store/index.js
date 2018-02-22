const Vue = require('nativescript-vue');
const Vuex = require('vuex');
const counter = require('./modules/counter');

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        counter
    }
})

module.exports = store;
