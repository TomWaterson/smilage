const Vue = require('nativescript-vue');
const mapState = require('vuex').mapState;
const mapMutations = require('vuex').mapMutations;

const StartTrip = Vue.component('start-trip', {
    computed: mapState({
        endDate: state => state.trip.startDate.month,
    }),

    methods: mapMutations({
        upDateStartField: state => this.$store.commit('updateStartField'),
    }),

    template: `
    <StackLayout>
        <Label text="Enter Start Date" />
        <DatePicker />
    </StackLayout>
    `
});

module.exports = StartTrip;
