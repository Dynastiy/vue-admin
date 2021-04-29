<template>
    <div id="main">
        <!-- <sidenav/>
       <topnav/> -->
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

                    <!--Other Page Content Continues here-->
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
                                                    <tr v-for="(payment, index) in payments" :key="index">
                                                        <td class="text-uppercase"><a href="javascript: void(0);" class="text-body font-weight-bold"> {{ payment.reference }} </a> </td>
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
                                        </div>
                                        <!-- end table-responsive -->
                                        <pagination 
                                            :meta_data="meta_data"
                                            v-on:next="fetchUsers">
                                        </pagination>

                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
import pagination from '../../components/pagination'
import AuthService from '@/services/AuthService'
export default {
     title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        pagination
    }, 
    data(){
        return{
            someValue: "Transactions",
            payments: null,
            meta_data: {
                total_pages: null,
                current_page: 1,
                prev_page_url: null
            }
        }
    },
    mounted(){
        this.fetchUsers();
    },
    methods:{
        fetchUsers(page = 1) {
            axios.get('https://api.fxhup.com/transaction/payments', {
                params: {
                    page
                }
            }).then((res) => {
            this.meta_data.total_pages = res.data.meta.total_pages;
            this.meta_data.current_page = res.data.meta.current_page;
            this.meta_data.prev_page_url = res.data.meta.links.previous;            
        });
        }
    },
    async created(){
        this.currentRoute;
        try{
        this.payments = await AuthService.getPayments();
        console.log(this.payments);
      } 
        catch (error) {
        console.log(error.response)
      }
       
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    }
    }
}
</script>
<style scoped>

</style>