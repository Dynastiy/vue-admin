<template>
   <div id="main">
      
       <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 class="mb-3">  {{ currentRouteName }} </h4>

                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                        <div class="row">
                            <div class="col-md-4 col-xl-3">
                                <div class="card card1">
                                    <div class="card-body">
                                        <div class="float-right mt-2">
                                            <barchart/>
                                        </div>
                                        <div>
                                            <h4 class="mb-1 mt-1">$ <span data-plugin="counterup"> {{ dashboard.total_payment }} </span></h4>
                                            <p class="text-muted mb-0">Total Payment</p>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->

                            <div class="col-md-4 col-xl-3">
                               <div class="card card2">
                                    <div class="card-body">
                                        <div class="float-right mt-2">
                                            <barchart/>
                                        </div>
                                        <div>
                                            <h5 class="mb-1 mt-1"><span data-plugin="counterup">{{ dashboard.resource_payments.all_time.count }}</span></h5>
                                            <p class="text-muted mb-0">Resource
                                            </p>
                                        </div>
                                        <div>
                                            <h5 class="mb-1 mt-1">$ <span data-plugin="counterup"> {{ dashboard.resource_payments.all_time.total }}</span></h5>
                                            <p class="small-text text-muted mb-0">Payments</p>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->

                            <div class="col-md-4 col-xl-3">
                                <div class="card card3">
                                    <div class="card-body">
                                        <div class="float-right mt-2">
                                            <barchart/>
                                        </div>
                                        <div>
                                            <h5 class="mb-1 mt-1"><span data-plugin="counterup"> {{ dashboard.subscription_payments.all_time.count }} </span></h5>
                                            <p class="text-muted mb-0">Subscribers</p>
                                        </div>
                                        <div>
                                            <h5 class="mb-1 mt-1">$ <span data-plugin="counterup"> {{ dashboard.subscription_payments.all_time.total }} </span></h5>
                                            <p class="small-text text-muted mb-0">Subscriptions</p>
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col-->

                            <div class="col-md-4 col-xl-3">
                                <div class="card card4">
                                    <div class="card-body">
                                        <div class="float-right mt-2">
                                            <barchart/>
                                        </div>
                                        <div>
                                            <h4 class="mb-1 mt-1"><span data-plugin="counterup">  {{ dashboard.users.all_time.count }}  </span></h4>
                                            <p class="text-muted mb-0">Users</p>
                                        </div>
                                        <!-- <p class="text-muted mt-3 mb-0"><span class="text-danger mr-1"><i class="mdi mdi-arrow-down-bold ml-1"></i>6.24%</span> since last week
                                        </p> -->
                                    </div>
                                </div>
                            </div> <!-- end col-->
                        </div> <!-- end row-->

                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">User Analytics</h4>

                                        <div class="mt-1">
                                            <chart  :chart-data="datacollection"></chart>
                                        </div>

                                        <div class="mt-3">
                                            <div id="sales-analytics-chart" class="apex-charts" dir="ltr">
                                            </div>
                                        </div>
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div> <!-- end row-->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Latest Transaction</h4>
                                        <div class="table-responsive">
                                            <table class="table table-centered table-nowrap mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Reference ID</th>
                                                        <th>Name</th>
                                                        <th>Date</th>
                                                        <th>Paymentable Type</th>
                                                        <th>View Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(payment, index) in pay" :key="index">
                                                        <td><a href="javascript: void(0);" class="text-uppercase text-body font-weight-bold"> {{ payment.reference }} </a> </td>
                                                        <td class="text-capitalize"> {{ payment.full_name }} </td>
                                                        <td>
                                                            {{ payment.user.created_at | formatDate }}
                                                        </td>
                                                        <td class="text-capitalize">
                                                            {{ payment.paymentable_type }}
                                                        </td>
                                                        <td>
                                                            <!-- Button trigger modal -->
                                                            <router-link  :to="'/transactions/'+ payment.id" type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="text-right mt-3">
                                                <router-link class="text-muted text-transform-none text-right" to="/transactions">View More>>> </router-link>
                                            </div>
                                        </div>
                                        <!-- end table-responsive -->
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->


                    </div> <!-- container-fluid -->
                </div>
                <!-- End Page-content -->
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import barchart from '../../components/barchart'
import chart from '../../components/actualchart'

import AuthService from '@/services/AuthService'
export default {
    title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        // topnav,
        // sidenav,
        barchart,
        // PieChart,
        chart
    },
        data(){
        return {
            dashboard: {},
            someValue: "Dashboard",
            payments: {},
            pay: {},
            datacollection: null,
        };
    },
    methods:{
        fillData () {
            axios.get('https://api.fxhup.com/transaction/charts')
            .then(response => {
                let results = response.data.data.transaction.users
                console.log(results)
            
                let dateresult = results.map(a => a.date)
                let expenseresult = results.map(a => a.expense)
                let incomeresult = results.map(a => a.income)
            
                this.expense = expenseresult
                this.income = incomeresult
                this.date = dateresult
            
                this.datacollection = {
                labels: this.date,
                datasets: [
                    {
                    label: 'Expense',
                    backgroundColor: '#f87979',
                    data: this.expense
                    },
                    {
                    label: 'Income',
                    backgroundColor: '#5bf8bf',
                    data: this.income
                    }
                ]
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    async created(){
        if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/');
    }
    
    this.payments = await AuthService.getPayments();
    this.pay = this.payments.slice(1, 5);
    this.dashboard = await AuthService.getAnalytics();
    console.log(this.dashboard)
    this.currentRoute;
    this.fillData()
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
        }
    },
    mounted() {
        // this.slice();
        this.fillData()
    }
    
}
</script>

<style scoped>
    .small-text {
        font-size: 0.8rem !important;
    }
    .card-body {

        background-color: rgba(225, 225, 225, 0.5) !important;
    }
    .card1 {
        border-top: 2px solid #ffb20f;
        
    }
    .card2 {
        border-top: 2px solid #00ff00;
    }
    .card3 {
        border-top: 2px solid #ff0000;
    }
    .card4 {
        border-top: 2px solid #01445f ;
    }
</style>