<template>
    <StackLayout>
        <GridLayout rows="92" columns="*" class="theme-bg">
            <Label row="0" col="0" :text="title" class="home-title" verticalAlignment="center" />
        </GridLayout>
        <StackLayout>
            <Label text="Distance" class="tripDetails__label" />
            <Label :text="totalDistance" class="tripDetails__value" />
            <Label text="Date" class="tripDetails__label" />
            <Label :text="endDate" class="tripDetails__value" />
            <Label text="Time" class="tripDetails__label" />
            <Label :text="time" class="tripDetails__value" />
            <Image src="~/images/edit.png" height="40" @tap="goToEditPage" />
            <Image src="~/images/trash.png" height="40" @tap="deleteTrip" />
        </StackLayout>
    </StackLayout>
</template>

<script>
import * as R from 'ramda';
import home from './../../../home/home';
import editPage from './../../edit/container/trip-edit';

export default {
    props: {
        identifier: {
            type: [Number, Object]
        },
        title: {
            type: String,
            default: 'Trip'
        },
        totalDistance: {
            type: Number,
            default: '0.00'
        },
        dateTime: {
            type: String,
            default: ''
        }
    },

    data () {
        return {
            home
        }
    },

    computed: {
        endDate () {
            return this.dateAndTimeOfEndDateProp(0);
        },
        time () {
            return this.dateAndTimeOfEndDateProp(1);
        }
    },

    methods: {
        dateAndTimeOfEndDateProp (arrayPosition) {
            let splitPosition = this.dateTime.indexOf('T');
            let timeInDate = R.compose(R.nth(arrayPosition), R.splitAt(splitPosition), R.replace('T', ""))

            return timeInDate(this.dateTime)
        },
        goToEditPage () {
            this.$navigateTo(editPage, {
                context: {
                    propsData: {
                        identifier: this.identifier
                    }
                }
            })
        },
        deleteTrip () {
            this.$store.dispatch('deleteTrip', this.identifier)
            .then(this.$store.dispatch('fetchTrips'))
            .catch((err) => {
                console.log(err + ": failed deleting the trip");
            });
            setTimeout(() => {
                this.$navigateTo(home)
            }, 100) // Single threaded life...
        }
    }
}
</script>
