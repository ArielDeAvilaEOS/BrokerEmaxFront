<template> 
    <div class="message" v-if="showMessage">
        <p>
            <span class="emax-check s-semibold mr-3"></span>
            <span class="xs-semibold mr-1">La transacción se ha creado con éxito:</span>
            <span class="xs-regular">Completa el pago para que sea visualizado entre 1 a 24 horas.</span>

        </p>
        <span class="emax-close s-regular close" @click="showMessage=false"></span>
    </div>
    <p
      class="goback xs-medium"
      @click="$router.back()"><li class="emax-arrow-left s-medium"></li> Regresar</p>
    <div class="deposit">
        <div class="deposit__content">
            <v-card class="mt-6 mr-4 pa-6 rounded-lg ">
                <v-card-text class="main-content">
                    <!-- section 1 -->
                    <section v-if="section==1" class="deposit__content-section">
                        <div class="deposit__text">
                            <h3 class="l-semibold">Depositar</h3>
                            <p class="s-regular" >Seleccione el método</p>
                        </div>

                        <div class="deposit__currencies">
                            <CurrencyBox
                              v-for="(currency, index) in currienciesOptions"
                              :key="index"
                              :index="index+1"
                              v-model:selection="selected"
                              @click="selected=index+1, step=2"
                              :currency="currency" />
                        </div>

                        <v-card class="pa-6 rounded-lg deposit__amount custom-card">
                            <div class="deposit__balance">
                                <img src="@/modules/ebank/assets/money.png" alt="">
                                <div>
                                    <p class="s-regular">E-Bank</p>
                                    <p class="l-semibold">$0.00</p>
                                </div>
                            </div>

                            <div class="amount-form">
                                <span class="xs-semibold">Cantidad</span>
                                
                                <form>
                                    <input
                                      @blur="isValid"
                                      placeholder="$0.000"
                                      type="number"
                                      v-model="amount">
                                </form>
                            </div>
                        </v-card>
                        

                        <div class="deposit__buttons">
                            <v-btn
                              color="primary"
                              variant="outlined"
                              rounded="lg"
                              size="large">Cancelar</v-btn>
                            <v-btn
                              color="primary"
                              variant="flat"
                              rounded="lg"
                              size="large"
                              @click="section= step==3 ? 2 : 1, showMessage=true">Continuar</v-btn>
                        </div>
                    </section>

                    <!-- Section 2 -->
                    <section v-if="section==2" class="deposit__content-section">
                        <div class="deposit__text">
                            <h3 class="l-semibold">Comprobante y dirección de wallet</h3>
                            <p class="s-regular" >Verifique los datos correctos del deposito</p>
                        </div>

                        <v-card class="pa-6 rounded-lg custom-card">
                            <div class="deposit__qr">
                                <div class="info-qr">
                                    <div class="info-qr__section">
                                        <p class="s-regular">Cantidad</p>
                                        <p class="s-bold">${{ amount }}</p>
                                    </div>
                                    <div class="info-qr__section">
                                        <p class="s-regular">Fecha</p>
                                        <p class="s-bold">04/08/2023</p>
                                    </div>
                                    <div class="info-qr__section">
                                        <p class="s-regular">Estado</p>
                                        <p class="state state--pending rounded-lg pa-2"><span class="dot dot--yellow"></span>Pendiente</p>
                                    </div>
                                </div>
                                <div class="container-qr">
                                    <img src="@/modules/ebank/assets/qr.png" alt="">
                                </div>
                            </div>
                        </v-card>

                        <v-card class="pa-6 rounded-lg custom-card">
                            <p class="xs-regular">Dirección Wallet</p>
                            <div class="wallet">
                                <p>{{ wallet }}</p>
                                <span class="emax-copy xs-medium"></span>
                            </div>
                        </v-card>
                    </section>

                    <!-- Section 3 -->
                    <section v-if="section == 3" class="deposit__content-section">
                        <v-card-item class="center">
                            <img src="@/modules/ebank/assets/emax_logo.png" alt="">
                            <p class="h5-semibold">Deposito exitoso</p>
                            <p class="s-light">Ten en cuenta que el deposito será visualizado entre 1 a 24 horas después de su pago.</p>
                        </v-card-item>

                        <div class="deposit__buttons">
                            <v-btn
                                color="primary"
                                variant="outlined"
                                rounded="lg"
                                size="large">Cancelar</v-btn>
                            <v-btn
                                color="primary"
                                variant="flat"
                                rounded="lg"
                                size="large"
                                @click="section=1, step=1">Nuevo deposito</v-btn>
                        </div>
                    </section>
                </v-card-text>
            </v-card>
        </div>
        <div class="deposit__steps pa-6">
            <stepper v-model:step="step" :items="items"/>
        </div>
    </div>
</template> 

<script lang='ts' setup> 
import { ref } from 'vue';
import Stepper from '../content/Stepper.vue';
import CurrencyBox from '../content/CurrencyBox.vue';

const showMessage = ref(false)

//form
const amount = ref(null)
const isValid = () => {
    if (amount.value) {
        step.value = 3
    } else {
        step.value = 2
    }
}

//currencies
const selected = ref(0)

//sections
const step = ref(1)
const section = ref(1)


//steps labels
const items = [
    'Seleccione método',
    'Cantidad a depositar',
    'Comprobante y dirección de wallet'
]

//data
const wallet = 'TJXoCK3EMxGWPqi2niklfBF7y0865kCrT'

const currienciesOptions = [
    {
        name: 'USDT',
        imgSrc: '/src/modules/ebank/assets/tether.svg'
    },
    {
        name: 'BTC',
        imgSrc: '/src/modules/ebank/assets/bitcoin.svg'
    },
    {
        name: 'BNB',
        imgSrc: '/src/modules/ebank/assets/bnb.svg'
    },
    {
        name: 'XRP',
        imgSrc: '/src/modules/ebank/assets/xrp.svg'
    },
    {
        name: 'TARJETA',
        imgSrc: '/src/modules/ebank/assets/visa_icon.svg'
    },
    {
        name: 'SKRILL',
        imgSrc: '/src/modules/ebank/assets/skrill_icon.svg'
    },
    {
        name: 'BNB',
        imgSrc: '/src/modules/ebank/assets/bnb.svg'
    },
    {
        name: 'XRP',
        imgSrc: '/src/modules/ebank/assets/xrp.svg'
    },
]

</script> 

<style lang='scss' scoped> 
.message{
    background-color: #F6FEF9;
    border-bottom: 1px solid #75E0A7;
    color: #067647;
    padding: .75rem 2rem;
    margin: -2rem;
    margin-left: -1.5rem;

    position: absolute;
    right: 2rem;
    left: 8.9rem;
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .close{
        cursor: pointer;
    }
}

.goback{
    cursor: pointer;
    width: fit-content;
    word-spacing: .5rem;
    color: #475467;
    vertical-align: middle;
}
.deposit{
    display: grid;
    grid-template-columns: 65% auto;
    height: 100%;

    &__content-section{
        display: flex;
        flex-direction: column;
        gap: 3.5rem;  
        
        .custom-card{
            border: 1px solid #ECF1F5;
            box-shadow: 0px 4px 10px 0px rgba(145, 158, 171, 0.10);

        }
    }

    &__currencies{
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 1rem;
    }

    &__amount{

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5.75rem;

        .amount-form{
            width: 100%;
            border-bottom: 1px solid #D0D5DD;
            display: flex;
            flex-direction: column;

            input{
                width: 100%;
                height: 100%;    
                padding: .5rem;
            }

            input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
                appearance: none;
                margin: 0;
            }

            input:focus-visible{
                outline: none;
            }
        }
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
        justify-content: flex-end;
        gap: 1rem;
    }

    &__qr{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .info-qr{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;

            &__section{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 6rem;

                p:first-child{
                    width: 9rem;
                }
            }
        }

        .container-qr{
            border-radius: .5rem;
            padding: .7rem;
            background-color: #EAECF0;

            img{
                width: 8rem;
                height: 8rem;
            }
        }
    }

    &__steps{
        border-left: 1px solid #EAECF0;
        background-color: #F9FAFB;
        position: relative;
        z-index: 0;
        height: 100%;
        
        &::before{
            content: '';
            border-left: 2px solid #EAECF0;
            height: 4rem;
            width: 2rem;
            position: absolute;
            top: -3.7rem;
            left: -0.1rem;
            z-index: -1;
        }

        &::after{
            content: '';
            border-left: 2px solid #EAECF0;
            height: 2%;
            width: 2rem;
            position: absolute;
            bottom: -0.1rem;
            left: -0.1rem;
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

    .dot{
        display: inline-block;
        border-radius: 9.375rem;
        width: 0.65rem;
        height: 0.65rem;
        margin-right: 0.32rem;

        &--green{
            background-color: #17B26A;
        }

        &--yellow{
            background-color: #FDB022;
        }
    }

    .wallet{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #397EA6;
        border: 1px dashed #397EA6;
        border-radius: .8rem;
        background-color: rgba(52, 166, 232, 0.05);
        padding: .6rem 1rem;


        span{
            cursor: pointer;
        }
    }

    .center{
        text-align: center;
        width: 90%;
        margin: 0 auto;
    }   
}
</style>