<template>
    <StackLayout>
        <GridLayout rows="92" columns="*" class="theme-bg">
            <Label row="0" col="0" text="Sharon's Trips" class="home-title" verticalAlignment="center" />
        </GridLayout>
        <StackLayout>
            <Image src="~/images/add.png" height="56" top="92" left="320" class="trip__value" @tap="goToJourney" />
            <trips></trips>
        </StackLayout>
    </StackLayout>
</template>


<script>
import journey from'./../journey/journey';
import trips from './../trip/trips';

export default {
    components: {
        journey,
        trips
    },

    data () {
        return {
            journey
        }
    },

    methods: {
        goToJourney () {
            this.$navigateTo(journey);
        }
    },

    created () {
        this.$store.commit('updateTravelState', 'naming');
    }
}

</script>
