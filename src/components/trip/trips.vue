<template>
    <StackLayout margin="16">
        <ListView class="trip__container" for="(trip, index) in trips">
            <v-template>
                <trip-card
                    :index="parseFloat(index)"
                    :last="parseFloat(tripsLength - 1)"
                    :title="trip.TRIP_NAME.toString()"
                    :totalDistance="parseFloat(trip.TOTAL_DISTANCE)"
                    :endDate="trip.END_DATE.toString()"
                    :identifier="trip.TRIP_ID">
                </trip-card>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
import tripCard from './trip-card';

export default {
    name: 'trips',

    components: {
        tripCard
    },

    created () {
        this.$store.dispatch('fetchTrips');
    },

    computed: {
        trips() {
            return this.$store.state.trip.trips;
        },
        tripsLength () {
            return this.$store.state.trip.trips.length;
        }
    }
}
</script>
