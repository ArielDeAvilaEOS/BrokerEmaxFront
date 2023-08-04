<template> 
    <div class="chart-container">
        <div class="info-chart">
            <div class="info-chart__legends">
                <p class="state state--approved rounded-lg pa-2"><span class="dot dot--green"></span>Ingresos</p>
                <p class="state state--pending rounded-lg pa-2"><span class="dot dot--yellow"></span>Retiros</p>
            </div>
            <div class="info-chart__buttons">
                <v-btn-toggle v-model="toggle_one"  mandatory>
                    <v-btn class="mr-4" color="secondary" size="small" rounded="lg"> 7D </v-btn>

                    <v-btn class="mr-4" color="secondary" size="small" rounded="lg"> 1M </v-btn>

                    <v-btn class="mr-4" color="secondary" size="small" rounded="lg"> 3M </v-btn>

                    <v-btn color="secondary" size="small" rounded="lg"> 1A </v-btn>
                </v-btn-toggle>
            </div>
        </div>
        <div class="chart">
            <apexchart type="line" height="416" :options="chartOptions" :series="series"></apexchart>

        </div>
    </div>
</template> 

<script lang='ts' setup>
import { ref } from 'vue';

const toggle_one = ref(0)

const chartOptions = {
    chart: {
        id: "area-chart",
        height: "100%",
        toolbar: {
            show: false,
        },
        stacked: false,
    },
    grid: {
        borderColor: '#DDE4ED',
        strokeDashArray: 7,
        yaxis: {
            lines: {
                show: true
            }
        },
        xaxis: {
            lines: {
                show: true
            }
        },
    },
    annotations: {
        points: [
            {
                x: "Miercoles",
                y: 80,
                marker: {
                    size: 3,
                    fillColor: "#17B26A",
                    strokeColor: "#17B26A",
                },
                label: {
                    borderColor: "#ABEFC6",
                    offsetY: -8,
                    borderRadius: 6,
                    style: {
                        color: "#223B67",
                        background: "#ECFDF3",
                        fontSize: "14px",
                        fontWeight: 500,
                        padding: {
                            left: 10,
                            right: 10,
                            top: 6,
                            bottom: 6,
                        }
                    },
                    text:"$0.00"
                }
            },
            {
                x: "Martes",
                y: 70,
                marker: {
                    size: 3,
                    fillColor: "#FDB022",
                    strokeColor: "#FDB022",
                },
                label: {
                    borderColor: "#FEDF89",
                    offsetY: -8,
                    borderRadius: 6,
                    style: {
                        color: "#223B67",
                        background: "#FFFAEB",
                        fontSize: "14px",
                        fontWeight: 500,
                        padding: {
                            left: 10,
                            right: 10,
                            top: 6,
                            bottom: 6,
                        }
                    },
                    text:"$0.00"
                }
            },
        ]  
    },
    markers: {
        size: 5,
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
    },
    colors: ["#17B26A", "#FDB022"],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
}



const series = [
    {
        name: "Ingresos",
        data: [20, 21, 80, 30, 11, 20],
    },
    {
        name: "Retiros",
        data: [20, 70, 41, 43, 21, 20],
    },
    
]

</script> 

<style lang='scss' scoped> 
.chart-container{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .info-chart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &__legends{
            display: flex;
            flex-direction: row;
            gap: .5rem;
        }

        &__buttons{
            button{
                width: 2rem;
                height: 2rem;
            }
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

    .state{
        width: fit-content;
        border: 1px solid;
        padding: 0.32rem;
        padding-right: .62rem;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        &--approved{
            border-color: #ABEFC6;
            background-color: #F6FEF9;
        }

        &--pending{
            border-color: #FEDF89;
            background-color: #FFFCF5;
        }

    }
}
</style>