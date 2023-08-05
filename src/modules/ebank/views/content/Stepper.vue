<template> 
    <div class="stepper">
        <section
          class="s-regular"
          v-for="(item, index) in items"
          :key="index"
          :class="{'step-current':step>=(index+1)}">
            <p>
                <span v-if="step <= (index+1) " class="emax-step" :class="{'s-bold': step >= (index + 1)}"></span>
                <span v-if="step > (index + 1)" class="emax-check s-bold"></span>
            </p>
            <p>{{ item }}</p>
        </section>
    </div>
</template> 

<script lang='ts' setup> 
const props = defineProps({
    step: {
        type: Number,
        defualt: 1,
        required: true
    },
    items: {
        type: Array<string>,
        required: true
    }
})
</script> 

<style lang='scss' scoped> 
.stepper{
    color: #98A2B3;

    section{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        position: relative;
        margin-bottom: 1.5rem;
    }

    section::before{
        content: '';
        display: block;
        height: 1rem;
        border-left: 2px solid #98A2B3;
        position: absolute;
        top: -1.3rem;
        left: 9px;
    }
    
    section:first-child::before{
        display: none;
    }

    .step-current{
        color: #223B67;font-weight: 600;
    }

    section.step-current::before{
        border-color: #223B67;
        border-left: 3px solid;
    }
}
</style>