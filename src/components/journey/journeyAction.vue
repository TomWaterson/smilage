<template>
    <GridLayout rows="52" columns="40, *, 40" class="journey__actionBar" paddingTop="40">
        <Image row="0" col="0" src="~/images/back-arrow.png" width="24" height="24" @tap="goBack"/>
        <Label row="0" col="1" :text="actionTitle" class="journey__actionTitle" />
        <Image row="0" col="2" src="~/images/forward-arrow.png" width="24" height="24" @tap="goToNextScreen" />
    </GridLayout>
</template>

<script>
import home from './../home/home';
import * as R from 'ramda';
import validator from '../../mixins/validation.js';

export default {
    props: {
        actionTitle: {
            type: String
        },
        nextState: {
            type: String
        },
        previousState: {
            type: String
        }
    },

    data () {
        return {
            home
        }
    },

    computed: {
        inputText: {
            get () {
                return this.getPropInStoreTripByTitle(this.$store.state.trip.journeyData, 'input');
            }
        },
        validators: {
            get () {
                return this.getPropInStoreTripByTitle(this.$store.state.trip.journeyData, 'validators');
            }
        }
    },

    methods: {
        goBack () {
            if (this.previousState === 'home') {
                this.$navigateTo(home);
            } else {
                this.$store.commit('updateTravelState', this.previousState);
            }
        },

        goToNextScreen () {
            const validField = validator({
                fieldValidators: this.validators
            });

            const isValid = R.all(R.equals(true), validField.validate(this.inputText));

            if (isValid) {
                if (this.nextState === 'home') {
                    this.$store.dispatch('addTrip', {
                        TRIP_ID: null,
                        USER_ID: 1000,
                        TRIP_NAME: this.getInputPropInStoreTripById(this.$store.state.trip.journeyData, 'naming'),
                        START_DATE: new Date(),
                        END_DATE: new Date(),
                        NOTES: '',
                        START_MILAGE: this.getInputPropInStoreTripById(this.$store.state.trip.journeyData, 'starting'),
                        END_MILAGE: this.getInputPropInStoreTripById(this.$store.state.trip.journeyData, 'ending'),
                        TOTAL_DISTANCE: R.subtract(
                            this.getInputPropInStoreTripById(this.$store.state.trip.journeyData, 'ending'),
                            this.getInputPropInStoreTripById(this.$store.state.trip.journeyData, 'starting')
                        ),
                        AMOUNT: 500 // define in function by config
                    })
                    this.$navigateTo(home);
                } else {
                    this.$store.commit('updateTravelState', this.nextState);
                }
            }
            else {
                return false;
            }
        },

        getInputPropInStoreTripById (journeyData, id) {
            return R.compose(R.prop('input'), R.head, R.filter((p) => R.equals(p.id, id)))(journeyData)
        },

        getPropInStoreTripByTitle (journeyData, prop) {
            return R.compose(R.prop(prop), R.head, R.filter((p) => R.equals(p.action, this.actionTitle)))(journeyData)
        }
    }
};
</script>
