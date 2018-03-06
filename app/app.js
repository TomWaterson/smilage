const Vue = require('nativescript-vue');
const store = require('./store');
const StartTrip = require('./components/startTrip');
const Home = require('./components/home');

new Vue({
    store,
    template: `
    <Page class="page">
        <StackLayout>
            <home></home>
        </StackLayout>
    </Page>
    `,

    components: {
        StartTrip,
        Home
    }
})
.$start()
