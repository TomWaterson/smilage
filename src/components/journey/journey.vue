<template>
    <StackLayout>
        <StackLayout v-for="j in journeyData" :key="j.id">
            <StackLayout v-if="j.id === journeyState">
                <journey-action
                    :actionTitle="j.action"
                    :nextState="j.next"
                    :previousState="j.previous">
                </journey-action>
                <journey-state
                    :keyboard="j.keyboard" 
                    :actionTitle="j.action"
                    :titleText="j.title"
                    :inputText="j.input"
                    :hintText="j.hint"
                    :imageSrc="j.image">
                </journey-state>
            </StackLayout>
        </StackLayout>
    </StackLayout>
</template>

<script>
import journeyState from './journeyState';
import journeyAction from './journeyAction';

export default {
    components: {
        journeyAction,
        journeyState
    },

    computed: {
        journeyData () {
            return this.$store.state.trip.journeyData
        },
        journeyState () {
            return this.$store.state.trip.travelState
        }
    }
}
</script>
