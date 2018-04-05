const Vue = require('nativescript-vue');
const mapState = require('vuex').mapState;
const mapMutations = require('vuex').mapMutations;
const startTrip = require('./startTrip');

const Home = Vue.component('home', {
    data () {
        return {
            startTrip
        }
    },

    template: `
    <StackLayout>
        <Button class="btn btn-rounded-lg text-muted" text="Start a new trip" @tap="$navigateTo(startTrip)" />
    </StackLayout>
    `
});

module.exports = Home;
