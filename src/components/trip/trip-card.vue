<template>
    <StackLayout>
        <AbsoluteLayout borderWidth="2" borderColor="#cccccc" class="trip-card-shadow"  marginBottom="16" paddingBottom="16">
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
export default {
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
        }
    }
}
</script>
