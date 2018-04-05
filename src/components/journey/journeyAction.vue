<template>
    <GridLayout rows="52" columns="40, *, 40" class="journey__actionBar" paddingTop="40">
        <Image row="0" col="0" src="~/images/back-arrow.png" width="24" height="24" />
        <Label row="0" col="1" :text="actionTitle" class="journey__actionTitle" />
        <Image row="0" col="2" src="~/images/forward-arrow.png" width="24" height="24" @tap="goToNextScreen" />
    </GridLayout>
</template>

<script>
import home from './../home/home';

export default {
    props: {
        actionTitle: {
            type: String
        },
        nextState: {
            type: String
        }
    },

    data () {
        return {
            home
        }
    },

    methods: {
        goToNextScreen () {
            if (this.nextState === 'home') {
                this.$navigateTo(home);
            } else {
                this.$store.commit('updateTravelState', this.nextState);
            }
        }
    }
};
</script>
