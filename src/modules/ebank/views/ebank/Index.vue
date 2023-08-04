<template>
    <div class="ebank">
        <div class="ebank__left">
            <!-- Balance -->
            <v-card class="pa-4 rounded-lg">
                <v-card-item>
                    <section class="ebank__item">
                        <div class="ebank__balance">
                            <img src="@/modules/ebank/assets/money.png" alt="">
                            <div>
                                <p class="s-regular">E-Bank</p>
                                <p class="l-semibold">$0.00</p>
                            </div>
                        </div>
                        <div class="ebank__buttons">
                            <router-link to="withdraw">
                                <v-btn size="large"  color="primary" variant="outlined" rounded="lg">
                                    Retirar
                                </v-btn>
                            </router-link>
                            <router-link to="deposit">
                                <v-btn size="large" color="primary" variant="flat" rounded="lg">
                                    Depositar
                                </v-btn>
                            </router-link>
                        </div>
                    </section>
                </v-card-item>
            </v-card>
            
            <!-- Chart of withdrawals and deposits -->
            <v-card class="pa-4 rounded-lg">
                <v-card-item>
                    <TransactionChart />
                </v-card-item>
            </v-card>

            <!-- Summary table of withdrawals and deposits -->
            <v-card class="pa-4 rounded-lg">
                <v-table class="no-border">
                    <thead >
                        <tr>
                            <th class="text-left">Estadistica</th>
                            <th class="text-left">Cantidad</th>
                            <th class="text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="dot dot--green"></span> Ingresos</td>
                            <td>101010</td>
                            <td>$0.000</td>
                        </tr>
                        <tr>
                            <td><span class="dot dot--yellow"></span> Retiros</td>
                            <td>101010</td>
                            <td>$0.000</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card>

            <!-- Detail table of withdrawals and deposits -->
            <v-card class="pa-4 rounded-lg tabs-options">
                <v-tabs v-model="tab" color="secondary">
                    <v-tab value="one">Depositos</v-tab>
                    <v-tab value="two">Retiros</v-tab>
                </v-tabs>
                <v-card-text class="pt-8">
                    <v-window v-model="tab">
                        <v-window-item value="one">
                            <transaction-table :items="transaction"></transaction-table>
                        </v-window-item>
                        <v-window-item value="two">
                            <transaction-table :items="transaction"></transaction-table>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </div>

        <div class="ebank__right">
            <!-- Profile progress -->
            <v-card class="pa-4 rounded-lg" v-if="profileProgress<100">
                <p class="xs-semibold">Completar perfil</p>
                <p class="xs-regular">porcentaje de verificación del perfil</p>
                <div class="progress-bar-custom">
                    <div
                      class="tooltip rounded-lg xs-regular"
                      :style="{left: left(profileProgress) + '%'}">
                        {{ profileProgress }}%
                    </div>
                    <v-progress-linear
                      color="#47CD89"
                      height="8"
                      :model-value="profileProgress"
                      rounded>
                    </v-progress-linear>
                </div>
                <v-container>
                    <v-row align="center" justify="center">
                        <v-btn class="custom-btn" color="primary" variant="outlined" rounded="lg">
                            Completar perfil
                        </v-btn>
                    </v-row>
                </v-container>
            </v-card>

            <!-- Documentation progress -->
            <v-card class="pa-4 rounded-lg" v-if="documentationProgress<100">
                <p class="xs-semibold">Subir documentos</p>
                <p class="xs-regular">porcentaje de verificación de documentos</p>
                <div class="progress-bar-custom">
                    <div 
                        class="tooltip rounded-lg xs-regular" 
                        :style="{ left: left(documentationProgress) + '%' }">
                            {{ documentationProgress }}%
                    </div>
                    <v-progress-linear
                        color="#47CD89"
                        height="8"
                        :model-value="documentationProgress"
                        rounded>
                    </v-progress-linear>
                </div>
                <v-container>
                    <v-row align="center" justify="center">
                        <v-btn class="custom-btn" color="primary" variant="outlined" rounded="lg">
                            Subir documentos
                        </v-btn>
                    </v-row>
                </v-container>
            </v-card>

            <!-- Validation progress -->
            <v-card class="pa-4 rounded-lg" v-if="validationProgress<100">
                <p class="xs-semibold">Validar tu cuenta</p>
                <p class="xs-regular">Porcentaje de verificación de cuenta</p>
                <PercentageChart :progress="validationProgress"/>
                <v-container>
                    <v-row align="center" justify="center">
                        <v-btn class="custom-btn" color="primary" variant="outlined" rounded="lg">
                            Validar cuenta
                        </v-btn>
                    </v-row>
                </v-container>
            </v-card>

            <!-- Profit chart -->
            <v-card class="pa-4 rounded-lg" v-if="isCompleteVerification">
                <p class="xs-semibold">Ganancias</p>
                <p class="xs-regular">Porcentaje de ganancias en el año</p>
                <br>
                <ProfitChart/>
            </v-card>

            <!-- Balance table -->
            <v-card class="pa-4 rounded-lg">
                <p class="xs-semibold">Balance general</p>
                <p class="xs-regular">Historial de balance</p>
                <br>
                <form class="date-filter s-light">
                    <label for="calendar">
                        <li  class="emax-calendar-date l-light"></li>
                    </label>
                    <div class="calendar">
                        <input class="showCalendar" v-model="dateFilter" id="calendar" type="date">
                    </div>
                </form>
                <br>
                <balance-table :items="balance"></balance-table>
            </v-card>

            <!-- Statistics -->
            <v-card class="pa-4 rounded-lg">
                <v-card-item>
                    <div class="ebank__statistics">
                        <img src="@/modules/ebank/assets/donut_chart.png">
                        <p class="xs-medium text-custom">Cree una cuenta y opere ahora para disfrutar de sus propias estadísticas de trading</p>
                        <v-btn rounded="lg" variant="flat" color="secondary" size="large"><span class="xs-regular">ver todas las estadisticas</span></v-btn>
                    </div>
                </v-card-item>
            </v-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DataTransaction } from '../../types/storeTypes';

import TransactionTable from '../content/TransactionTable.vue'
import BalanceTable from '../content/BalanceTable.vue';
import PercentageChart from '../content/PercentageChart.vue';
import TransactionChart from '../content/TransactionChart.vue'
import ProfitChart from '../content/ProfitChart.vue'

const tab = ref(null)
const dateFilter = ref('')

const profileProgress: number = 60
const documentationProgress: number = 80
const validationProgress: number = 75

const left = (value: number) => {
    if (value<3) {
        return 3
    } else if (value > 97) {
        return 97
    }

    return value
}

const isCompleteVerification: boolean = profileProgress == 100 && documentationProgress == 100 && validationProgress == 100

const transaction: DataTransaction[] = [
    {
        id: 0,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 1,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/skrill_icon.svg',
        accountNumber: '3958768579',
        state: 'Pendiente',
        amount: 0.00
    },
    {
        id: 2,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 3,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 4,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 5,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Pendiente',
        amount: 0.00
    },
    {
        id: 6,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/skrill_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 7,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 8,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Pendiente',
        amount: 0.00
    },
    {
        id: 9,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 10,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/skrill_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 11,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Pendiente',
        amount: 0.00
    },
    {
        id: 12,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 13,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },
    {
        id: 14,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/skrill_icon.svg',
        accountNumber: '3958768579',
        state: 'Pendiente',
        amount: 0.00
    },  
    {
        id: 15,
        paymentMethod: 'Visa',
        date: '06/06/2023',
        asset: '/src/modules/ebank/assets/visa_icon.svg',
        accountNumber: '3958768579',
        state: 'Aprobado',
        amount: 0.00
    },  
]

const balance = [
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },
    {
        date: '06/06/2023',
        amount: 0.0000
    },

]

</script>

<style lang="scss" scoped>
.ebank{
    width: 100%;
    
    display: grid;
    grid-template-columns: 65% auto;
    gap: 1rem;

    &__right{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__left{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__balance{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;

        img{
            width: 4.375rem;
            height: 3.63463rem;
        }
    }

    &__buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1.12rem;
    }

    &__statistics{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        img{
            width: 10.5rem;
            margin: 0 auto;
        }
        .text-custom{
            text-align: center;
            color: #667085;
        }
    }

    .custom-btn{
        height: 3rem;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }

    .dot{
        display: inline-block;
        border-radius: 50%;
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.62rem;

        &--green{
            background-color: #17B26A;
        }

        &--yellow{
            background-color: #FDB022;
        }
    }

    .no-border{
        tbody tr td{
            border-bottom: none !important;
        }
    }

    .tabs-options{
        .v-slide-group{
            border-bottom: 1px solid #EAECF0;
        }
    }
    .progress-bar-custom{
        margin-top: 3.94rem;
        margin-bottom: 1.5rem;
        position: relative;
        
        .tooltip{
            box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
            width: 3.125rem;
            height: 2.125rem;
            border: 1px solid #EAECF0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 1rem;
            transform: translateX(-50%);
        }
    }

    .date-filter{
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #ced4da;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        color: #667085;
        
        
        
        .calendar{
            overflow: hidden;
            width: 100%;
            
            input{
                width: 100%;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                padding: 0.375rem 0.75rem;
                border-radius: 0.25rem;
                
                background-color: white;
                color: #667085;
    
                display: flex;
                flex-direction: row-reverse;
                gap: .5rem;    
            }
    
            input:focus-visible{
                outline: none;
            }

            input::-webkit-calendar-picker-indicator{
                width: 100%;
                height: auto;
                background: transparent;
                color: transparent;
                cursor: pointer;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }
        }

    }
}
</style>
