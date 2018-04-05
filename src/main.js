import Vue from 'nativescript-vue';
import store from './store';
import trips from './components/trip/trips';
import home from'./components/home/home';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
Vue.prototype.$store = store;

new Vue({
    components: {
        trips
    },
    store,
    render: h => h(home),
}).$start();
