<template>
    <StackLayout>
        <GridLayout rows="92" columns="*" class="theme-bg">
            <Label row="0" col="0" :text="title" class="tripEdit__title" verticalAlignment="center" />
        </GridLayout>
        <StackLayout>
            <Label text="Trip name" class="tripDetails__label" />
            <TextField v-model="tripName" class="tripEdit__text-field" />
            <Label text="Odometer Start Reading" class="tripDetails__label" />
            <TextField v-model="startMilage" class="tripEdit__text-field" />
            <Label text="Odometer End Reading" class="tripDetails__label" />
            <TextField v-model="endMilage" class="tripEdit__text-field" />
            <Label text="Date" class="tripDetails__label" />
            <TextField v-model="endDate" class="tripEdit__text-field" />
            <Label text="Time" class="tripDetails__label" />
            <TextField v-model="time" class="tripEdit__text-field" />
            <Label text="Save" class="tripDetails__label" @tap="editTrip" />
        </StackLayout>
    </StackLayout>
</template>

<script>
import * as R from 'ramda';
import home from './../../../home/home';

export default {
    props: {
        identifier: {
            type: [Number, Object]
        },
        title: {
            type: String,
            default: 'Edit your trip'
        },
        trip: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },

    created() {
      //do something after creating vue instance
      console.log(this.trip.END_DATE);
      console.log(this.endDate);
      console.log(this.time);
    },

    data () {
        return {
            home,
            tripName: this.trip.TRIP_NAME.toString(),
            startMilage: this.trip.START_MILAGE.toString(),
            endMilage: this.trip.END_MILAGE.toString(),
            endDate: this.trip.END_DATE.toString(),
            time: this.trip.END_DATE.toString()
        }
    },

    computed: {
        getEndDate () {
            return this.dateAndTimeOfEndDateProp(0);
        },
        getTime () {
            return this.dateAndTimeOfEndDateProp(1);
        }
    },

    methods: {
        dateAndTimeOfEndDateProp (arrayPosition) {
            let splitPosition = this.trip.END_DATE.indexOf('T');
            let timeInDate = R.compose(R.nth(arrayPosition), R.splitAt(splitPosition), R.replace('T', ""))

            return timeInDate(this.trip.END_DATE);
        },
        editTrip () {
            this.$store.dispatch('editTrip', {
                id: this.identifier.toString(),
                data: {
                    TRIP_ID: this.identifier.toString(),
                    USER_ID: "1000",
                    TRIP_NAME: this.tripName,
                    END_DATE: this.endDate,
                    START_MILAGE: this.startMilage,
                    END_MILAGE: this.endMilage,
                    TOTAL_DISTANCE: R.toString(R.subtract(this.endMilage, this.startMilage))
                }
            })
            .then(this.$store.dispatch('fetchTrips'))
            .catch((err) => {
                console.log(err + ": failed editing the trip");
            });
            setTimeout(() => {
                this.$navigateTo(home)
            }, 100) // Single threaded life...
        }
    }
}
</script>
