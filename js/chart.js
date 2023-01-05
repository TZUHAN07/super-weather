const chartOneButt = document.getElementById('chart-1')
const chartTwoButt = document.getElementById('chart-2')
const chartThreeButt = document.getElementById('chart-3')
const ctx = document.getElementById('myChart')

Chart.defaults.font.size = 14;
Chart.defaults.borderColor = '#FFFFFF'
Chart.defaults.color = '#FFFFFF';
Chart.defaults.plugins.legend.position = 'bottom'

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '高溫(°C)',
            borderColor: 'rgb(255, 172, 28)',
            pointBackgroundColor: 'rgb(255, 172, 28)',
            backgroundColor: 'rgb(255, 172, 28)',
            borderWidth: 2,
            data: [],
            tension: 0.4
        },
        {
            label: '低溫(°C)',
            borderColor: 'rgb(52, 152, 219 )',
            pointBackgroundColor: 'rgb(52, 152, 219 )',
            backgroundColor: 'rgb(52, 152, 219 )',
            borderWidth: 2,
            data: [],
            tension: 0.4
        }]
    },
    options: {
        layout: {
            padding: 50
        }
    }
});

const chartOneDatasets = [
    {
        label: '溫度(°C)',
        borderColor: 'rgb(206, 206, 206)',
        pointBackgroundColor: 'rgb(206, 206, 206)',
        backgroundColor: 'rgb(206, 206, 206)',
        borderWidth: 2,
        data: [],
        tension: 0.4
    },
    {
        label: '體感溫度(°C)',
        borderColor: 'rgb(255, 234, 0)',
        pointBackgroundColor: 'rgb(255, 234, 0)',
        backgroundColor: 'rgb(255, 234, 0)',
        borderWidth: 2,
        data: [],
        tension: 0.4
    }
]

const chartTwoDatasets = [
    {
        label: '高溫(°C)',
        borderColor: 'rgb(255, 172, 28)',
        pointBackgroundColor: 'rgb(255, 172, 28)',
        backgroundColor: 'rgb(255, 172, 28)',
        borderWidth: 2,
        data: [],
        tension: 0.4
    },
    {
        label: '低溫(°C)',
        borderColor: 'rgb(52, 152, 219 )',
        pointBackgroundColor: 'rgb(52, 152, 219 )',
        backgroundColor: 'rgb(52, 152, 219 )',
        borderWidth: 2,
        data: [],
        tension: 0.4
    }
]

const chartThreeDatasets = [
    {
        label: '體感高溫(°C)',
        borderColor: 'rgb(255, 172, 28)',
        pointBackgroundColor: 'rgb(255, 172, 28)',
        backgroundColor: 'rgb(255, 172, 28)',
        borderWidth: 2,
        data: [],
        tension: 0.4
    },
    {
        label: '體感低溫(°C)',
        borderColor: 'rgb(52, 152, 219 )',
        pointBackgroundColor: 'rgb(52, 152, 219 )',
        backgroundColor: 'rgb(52, 152, 219 )',
        borderWidth: 2,
        data: [],
        tension: 0.4
    }
]

function updateChartOne(){
    chart.data.labels = hourWeather.starttime
    chart.data.datasets = chartOneDatasets
    chart.data.datasets[0].data = hourWeather.T
    chart.data.datasets[1].data = hourWeather.AT
    chart.update()
}

function updateChartTwo(){
    chart.data.labels = weekWeather.High.date
    chart.data.datasets = chartTwoDatasets
    chart.data.datasets[0].data = weekWeather.High.MaxT
    chart.data.datasets[1].data = weekWeather.Low.MinT
    chart.update()
}

function updateChartThree(){
    chart.data.labels = weekWeather.ApHigh.date
    chart.data.datasets = chartThreeDatasets
    chart.data.datasets[0].data = weekWeather.ApHigh.MaxAT
    chart.data.datasets[1].data = weekWeather.ApLow.MinAT
    chart.update()
}

chartOneButt.addEventListener('click', () => {
    updateChartOne()
})

chartTwoButt.addEventListener('click', () => {
    updateChartTwo()
})

chartThreeButt.addEventListener('click', () => {
    updateChartThree()
})