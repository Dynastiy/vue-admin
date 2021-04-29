<template>
    <div>
        <apexchart 
             type="bar" class="chart"
            :options="options" :series="series">
        </apexchart>  
    </div>
</template>
<script>
export default {
    components: {
        
    },  
    data(){
        return{
             options: {
            chart: {
            id: 'vuechart-example',
            toolbar: { show: false, 
            tools: { download: true, 
            selection: true, 
            zoom: true, 
            zoomin: true, 
            zoomout: true, 
            pan: true, 
            reset: true }, 
            }, 
            zoom: { 
                enabled: true },
            }     
        },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ],
         
    },
    series: [{
      name: '',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 90, 65],
      
    }],
        }
        },
    }
</script>
<style scoped>
    @media only screen and (max-width: 768px) {
        apexchart {
            width: 100px !important;
            height: 50px !important;
        }
    }
</style>