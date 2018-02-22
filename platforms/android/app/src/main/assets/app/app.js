const Vue = require('nativescript-vue');
const store = require('./store');
const mapState = require('vuex').mapState;

new Vue({
    store,
    template: `
    <Page>
        <StackLayout>
            <Label :text="count + ' taps left'" style="text-align: center; font-size: 30; padding: 20 0;" />
            <Button text="Tap" @tap="decrement" />
        </StackLayout>
    </Page>
    `,

    computed: mapState({
        count: state => state.counter.count,
    }),

    methods: {
        decrement() {
            this.$store.commit('decrement')
        }
    }
})
.$start()
