const Vue = require('nativescript-vue');
const store = require('./store');
const StartTrip = require('./components/startTrip');

new Vue({
    store,
    template: `
    <Page>
        <StackLayout>
            <start-trip></start-trip>
        </StackLayout>
    </Page>
    `,

    components: {
        StartTrip
    }
})
.$start()
