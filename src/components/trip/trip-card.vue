<template>
    <StackLayout>
        <AbsoluteLayout borderWidth="2" borderColor="#cccccc" class="trip-card-shadow" marginBottom="16" paddingBottom="16" @tap="viewTrip">
            <Image src="~/images/car.png" top="12" left="16" height="40" width="40" stretch="fill" />
            <Image src="~/images/checkbox.png" top="20" left="340" height="24" width="24" stretch="fill" />
            <Label top="22" left="72" :text="title" class="trip__title" />
            <Label top="71" left="16" text="Distance" class="trip__label" />
            <Label top="92" left="16" :text="totalDistance" class="trip__value" />
            <Label top="71" left="92" text="Date" class="trip__label" />
            <Label top="92" left="92" :text="endDate" class="trip__value" />
        </AbsoluteLayout>
    </StackLayout>
</template>

<script>
import tripDetails from "./view/container/trip-details";

export default {
    data () {
        return {
            tripDetails
        }
    },

    props: {
        goToJourney: {
            type: Function,
        },
        index: {
            type: Number,
        },
        last: {
            type: Number,
        },
        title: {
            type: String,
            default: 'Trip'
        },
        totalDistance: {
            type: Number,
            default: '0.00'
        },
        endDate: {
            type: String,
            default: '0.00'
        },
        identifier: {
            type: [Number, Object],
            default: 0
        }
    },

    methods: {
        viewTrip () {
            this.$navigateTo(tripDetails, {
                context: {
                    propsData: {
                        identifier: this.identifier
                    }
                }
            });
        }
    }
}
</script>
