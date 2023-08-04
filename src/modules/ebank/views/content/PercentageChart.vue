<template>
    <div class="chart">
        <apexchart
            type="radialBar"
            :height="250"
            :series="series"
            :options="chartOptions"></apexchart> 

    </div>
</template> 

<script lang='ts' setup>
const props = defineProps({
    progress: {
        type: Number,
        required: true
    }
})

const series = [props.progress]

const chartOptions = {
    colors: ["#079455"],
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
                margin: 0,
                size: "63%",  
            },
            track: {
                background: '#EAECF0',
                startAngle: -90,
                endAngle: 90,

            },
            dataLabels: {
                name: {
                    show: true,
                    offsetY: -35,
                    color: "#475467",
                    fontWeight:"500"
                },
                value: {
                    fontSize: "30px",
                    show: true,
                    offsetY: -15,
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Cuenta"]
}
</script> 

<style lang='scss' scoped> 
.chart{
    height: 9.375rem;
    overflow: hidden;
}

</style>