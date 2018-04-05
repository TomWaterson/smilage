<template>
    <StackLayout>
        <Label :text="titleText" textWrap="true" class="journey__title" />
        <TextField v-show="inputText !== undefined" :text="inputText" :hint="hintText" />
        <Image v-show="imageSrc !== undefined" :src="imageSrc"/>
    </StackLayout>
</template>

<script>
export default {
    props: {
        titleText: {
            type: String,
            required: true,
        },
        inputText: {
            type: String,
            required: false,
        },
        hintText: {
            type: String,
            required: false,
        },
        imageSrc: {
            type: String
        }
    }
}
</script>
