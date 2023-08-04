<template> 
    <v-table class="rounded-lg table-transaction">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in displayedItems" :key="index">
                <td>{{ item.date }}</td>
                <td class="xs-semibold">${{ item.amount.toPrecision(4) }}</td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="pagination-custom">
                        <v-btn
                            class="rounded-lg custom-btn"
                            color="primary"
                            variant="outlined"
                            :disabled="page == 1"
                            @click="prevPage">
                            <i class="emax-arrow-prev s-regular"></i>   
                        </v-btn>

                        <p>Página {{ page }} de {{ totalPages }}</p>
                        
                        <v-btn
                            class="rounded-lg custom-btn"
                            color="primary"
                            variant="outlined"
                            :disabled="page == totalPages"
                            @click="nextPage">
                            <i class="emax-arrow-next s-regular"></i>
                        </v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
</template> 

<script lang='ts' setup>
import { ref, computed } from 'vue';

const props = defineProps({
    items: {
        type: Object,
        required: true
    }
})

const page = ref(1)
const itemsPerPage = 4

const totalPages = computed(() => Math.ceil(props.items.length / itemsPerPage))

const startIndex = computed(() => (page.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)
const displayedItems = computed(() => props.items.slice(startIndex.value, endIndex.value))

const prevPage = () => { if (page.value > 1) page.value-- }
const nextPage = () => { if (page.value < totalPages.value) page.value++ }
</script> 

<style lang='scss' scoped> 
.table-transaction{
    border: thin solid rgba($color: #000000, $alpha: 0.12);

    thead tr th{
        background-color: #F9FAFB;
    }

    tbody tr td{
        padding: 1rem 1rem !important;
    }

    .pagination-custom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .custom-btn{
            height: 3rem;
            border: 1px solid #D0D5DD;
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        }
    }
}
</style>