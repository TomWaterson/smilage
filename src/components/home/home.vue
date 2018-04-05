<template>
    <StackLayout>
        <GridLayout rows="92" columns="*" class="theme-bg">
            <Label row="0" col="0" text="Sharon's Trips" class="home-title" verticalAlignment="center" />
        </GridLayout>
        <StackLayout>
            <trips></trips>
        </StackLayout>
    </StackLayout>
</template>


<script>
import journey from'./../journey/journey';
import trips from './../trip/trips';

export default {
    components: {
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
