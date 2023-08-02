<template>
    <div class="ebank">
        <div class="ebank__right">
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
                charts
            </v-card>

            <!-- Summary table of withdrawals and deposits -->
            <v-card class="pa-4 rounded-lg">
                <v-table>
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
            <v-card class="pa-4 rounded-lg">
                <v-tabs v-model="tab" color="secondary">
                    <v-tab value="one">Depositos</v-tab>
                    <v-tab value="two">Retiros</v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item value="one">
                            Hola depositos
                        </v-window-item>
                        <v-window-item value="two">
                            hola retiros
                        </v-window-item>
                    </v-window>

                </v-card-text>
            </v-card>
        </div>

        <div class="ebank__left">
            <v-card class="pa-4 rounded-lg" v-if="progressProfile<100">Completar perfil</v-card>
            <v-card class="pa-4 rounded-lg" v-if="progressDocuments<100">subir documentos</v-card>
            <v-card class="pa-4 rounded-lg" v-if="progressValidation<100">Validar tu cuenta</v-card>
            <v-card class="pa-4 rounded-lg" v-if="isCompleteVerification">Ganancias </v-card>
            <v-card class="pa-4 rounded-lg">balance general</v-card>
            <v-card class="pa-4 rounded-lg">ver todas las estadisticas</v-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tab = ref(null)

const progressProfile: number = 60
const progressDocuments: number = 80
const progressValidation: number = 75

const isCompleteVerification: boolean = progressProfile == 100 && progressDocuments == 100 && progressValidation == 100


</script>

<style lang="scss" scoped>
.ebank{
    width: 100%;
    
    display: grid;
    grid-template-columns: 70% 30%;
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
}
</style>
