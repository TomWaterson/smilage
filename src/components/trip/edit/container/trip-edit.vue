<template>
    <StackLayout v-if="tripById !== undefined">
        <trip-edit
            :identifier="tripById.TRIP_ID"
            title="Edit your trip"
            :trip="tripById">
        </trip-edit>
    </StackLayout>
</template>

<script>
import tripEdit from "../ui/trip-edit";
import * as R from "ramda";

export default {
    components: {
        tripEdit
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
