<template> 
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</template> 

<script lang='ts' setup> 

const chartOptions = {
    chart: {
        toolbar: {
            show:false
        },

    },
    colors: ['#A6CEE3', '#1F78B4'],
    plotOptions: {
        bar: {
            columnWidth: "60%",
            dataLabels: {
                position: 'top', 
            },
        }
    },
    stroke: {
        width: [0, 0]
    },
    xaxis: {
        categories: ['Mensual', 'Semestral', 'Anual'],
        
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: number) {
            return val + "%";
        },
        offsetY:-20,
        background: {
            enabled: false,
        },
        style: {
            colors: ['##344054']
        }
    },
    grid: {
        borderColor: '#DDE4ED',
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
    legend: {
        position: 'top',
        horizontalAlign: "left",
        offsetX: -50,
        fontWeight: 500,
        fontSize: '14px',
        itemMargin: {
            horizontal: 50,
            vertical: 0
        },
    }
}

const series = [
    {
        name: '2023',
        type: 'column',
        data: [80, 10, 72]
    },
    {
        name: '2022',
        type: 'column',
        data: [70, 82, 46]
    }
]

</script> 

<style lang='scss' scoped> 

</style>