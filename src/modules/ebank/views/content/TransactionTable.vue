<template> 
    <v-table class="table-transaction rounded-lg">
        <thead >
            <tr>
                <th class="th-bg">ID</th>
                <th>Medio de pago</th>
                <th>Número cuenta</th>
                <th>Estado</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in displayedItems" :key="item.id">
                <td>{{ item.id }}</td>
                <td >
                    <div class="td-custom">
                        <img :src="item.asset" alt="">
                        <div>
                            <p class="xs-medium">{{ item.paymentMethod }}</p>
                            <p>{{ item.date }}</p>
                        </div>
                    </div>
                </td>
                <td class="xs-medium">{{ item.accountNumber }}</td>
                <td> 
                    <p 
                        class="state rounded-lg"
                        :class="item.state == 'Aprobado' ? 'state--approved' : 'state--pending'"
                    >
                        <span 
                            class="dot"
                            :class="item.state == 'Aprobado' ? 'dot--green' : 'dot--yellow'"
                        ></span> 
                        {{ item.state }}
                    </p>
                </td>
                <td class="xs-medium">${{ item.amount.toPrecision(3) }}</td>
            </tr>
            <tr>
                <td colspan="5">
                    <div class="pagination-custom">
                        <v-btn
                          class="rounded-lg custom-btn"
                          color="primary"
                          variant="outlined"
                          :disabled="page==1"
                          @click="prevPage">
                            <template v-slot:prepend>
                                <i class="emax-arrow-prev s-regular"></i>   
                            </template>
                            Previous
                        </v-btn>

                        <v-pagination 
                            v-model="page" 
                            :length="totalPages">
                            
                            <template #prev></template>
                            <template #next></template>
                        </v-pagination>

                        <v-btn
                          class="rounded-lg custom-btn"
                          color="primary"
                          variant="outlined"
                          :disabled="page==totalPages"
                          @click="nextPage">
                            Next
                            <template v-slot:append>
                                <i class="emax-arrow-next s-regular"></i>
                            </template>
                        </v-btn>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>

</template> 

<script lang='ts' setup>
import type { DataTransaction } from '../../types/storeTypes';
import { ref, computed } from 'vue';

const props = defineProps({
    items: {
        type: Object as () => Array<DataTransaction>,
        required: true
    }
})

const page = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => Math.ceil(props.items.length / itemsPerPage))

const startIndex = computed(() => (page.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)
const displayedItems = computed(()=> props.items.slice(startIndex.value,endIndex.value))

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
    
    .td-custom{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;
    }

    .dot{
        display: inline-block;
        border-radius: 50%;
        width: 0.55rem;
        height: 0.55rem;
        margin-right: 0.32rem;

        &--green{
            background-color: #17B26A;
        }

        &--yellow{
            background-color: #FDB022;
        }
    }

    .state{
        width: fit-content;
        border: 1px solid #EAECF0;
        padding: 0.32rem;
        padding-right: .62rem;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        &--approved{
            background-color: #F6FEF9;
        }

        &--pending{
            background-color: #FFFCF5;
        }

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