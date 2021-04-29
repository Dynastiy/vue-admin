<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import transactionChartData from '../js/chart'

export default {
  name: 'PlanetChart',
        data(){
            return{
                transactionChartData:  transactionChartData
            }
        },
        mounted() {
                const ctx = document.getElementById('planet-chart');
                new Chart(ctx, this.transactionChartData);
            }
}

</script>