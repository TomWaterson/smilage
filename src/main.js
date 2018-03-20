import Vue from 'nativescript-vue';
import store from './store';
import startTrip from'./components/startTrip';
import endTrip from'./components/endTrip';
import home from'./components/home';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
Vue.prototype.$store = store;

new Vue({
    store,
    render: h => h(home),
}).$start();
