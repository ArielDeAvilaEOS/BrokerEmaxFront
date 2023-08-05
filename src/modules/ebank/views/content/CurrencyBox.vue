<template> 
    <div
    class="currency"
    :class="{ 'selected': selection == index }"
    @click="selected = !selected">
        <img :src="currency.imgSrc" alt="">
        <p>{{ currency.name }}</p>
    </div>
</template> 

<script lang='ts' setup> 
import { ref } from 'vue';

const props = defineProps({
    currency: {
        type: Object,
        required: true
    },
    selection: {
        type: Number,
        requiried: true
    },
    index: {
        type: Number,
        required: true
    }
})

const selected = ref(false)

</script> 

<style lang='scss' scoped> 
.currency{
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex: 1 0 0;

    border-radius: 0.5rem;
    border: 1px solid #EAECF0;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(145, 158, 171, 0.10);

    cursor: pointer;

    img{
        width: 3rem;
        height: 3rem;
    }

    &.selected{
        border-radius: 0.5rem;
        border: 3px solid  #397EA6;
        background: rgba(52, 166, 232, 0.05);
        box-shadow: 0px 4px 10px 0px rgba(145, 158, 171, 0.10);
    }
}
</style>