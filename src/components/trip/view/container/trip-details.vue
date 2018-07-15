<template>
    <StackLayout v-if="tripById !== undefined">
        <trip-details
            :identifier="tripById.TRIP_ID"
            :title="tripById.TRIP_NAME"
            :totalDistance="tripById.TOTAL_DISTANCE"
            :dateTime="tripById.END_DATE">
        </trip-details>
    </StackLayout>
</template>

<script>
import tripDetails from "../ui/trip-details";
import * as R from "ramda";

export default {
    components: {
        tripDetails
    },

    props: {
        identifier: {
            type: [Number, Object]
        }
    },

    computed: {
        tripById () {
            const filterByTripID = R.filter((x) => {
                return R.equals(this.identifier, x.TRIP_ID)
            });

            const getTripById = R.compose(R.head, filterByTripID);

            return getTripById(this.tripData);
        },
        tripData () {
            return this.$store.state.trip.trips;
        }
    }
}
</script>
