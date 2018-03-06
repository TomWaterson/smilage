const Vue = require('nativescript-vue');
const mapState = require('vuex').mapState;
const mapMutations = require('vuex').mapMutations;
const StartTrip = Vue.component('start-trip', {
    computed: mapState({
        startDate: state => state.trip.startDate,
    }),

    methods: mapMutations({
        viewTrip: state => this.$store.commit('increment'),
        editTrip: state => this.$store.commit('increment'),
        deleteTrip: state => this.$store.commit('increment'),
        newTrip: state => this.$store.commit('increment')
    }),

    template: `
    <StackLayout>
        <Button text="New Trip" @tap="newTrip" />
        <Button text="View Trip" @tap="viewTrip" />
        <Button text="Edit Trip" @tap="editTrip" />
        <Button text="Delete Trip" @tap="deleteTrip" />
    </StackLayout>
    `
});

module.exports = StartTrip;
