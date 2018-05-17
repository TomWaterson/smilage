<template>
    <StackLayout>
        <Label :text="titleText" textWrap="true" class="journey__title" />
        <TextField :keyboardType="keyboard" v-model="inputText" v-show="inputText !== undefined" :hint="hintText" />
        <Image v-show="imageSrc !== undefined" :src="imageSrc"/>
    </StackLayout>
</template>

<script>
import * as R from 'ramda';

export default {
    props: {
        keyboard: {
            type: String
        },
        actionTitle: {
            type: String
        },
        titleText: {
            type: String,
            required: true,
            default: 'meow'
        },
        hintText: {
            type: String,
            required: false,
        },
        imageSrc: {
            type: String
        }
    },

    computed: {
        inputText: {
            get () {
                return this.getPropInStoreTripByTitle(this.$store.state.trip.journeyData, 'input');
            },
            set (value) {
                this.$store.commit('updateInput', {
                    action: this.actionTitle,
                    value
                });
            }
        }
    },

    methods: {
        getPropInStoreTripByTitle (journeyData, prop) {
            return R.compose(R.prop(prop), R.head, R.filter((p) => R.equals(p.action, this.actionTitle)))(journeyData)

        }
    }
}
</script>
