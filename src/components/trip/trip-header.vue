<template>
    <ActionBar>
        <Label text="Back"/>
        <Label :text="heading"/>
        <Label text="Next"/>
    </ActionBar>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            default: 'Drive safe :)'
        }
    }
}
</script>
