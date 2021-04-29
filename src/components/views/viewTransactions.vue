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
                                    
                                    <div class="page-title-right">
                                        <span class="left icon"><i class="fa fa-arrow-back" aria-hidden="true"></i><span class="arrow-left"></span></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <!-- end page title -->

                    <!--Other Page Content Continues here-->
                    <div class="mr-4">
                                          <!-- {{ transaction }} -->
                                        <!-- <img class="img-books rounded-circle" :src="item.cover_page" alt="Resource thumbnail" width="150" height="150"> -->
                                      </div>
                          <div class="row">
                              <h4 v-if="transaction.status === 'fail'" class="ml-3 mb-3"> <i class="fa fa-times text-danger mr-3" aria-hidden="true"></i> Transaction Failed</h4>
                              <h4 v-if="transaction.status === 'pending'" class="ml-3 mb-3"> <i class="fa fa-exclamation text-warning mr-3" aria-hidden="true"></i> Transaction is Processing</h4>
                              <h4 v-if="transaction.status === 'success'" class="ml-3 mb-3"> <i class="fa fa-check text-success mr-3" aria-hidden="true"></i> Transaction was Successfully processed</h4>
                            <div class="col-lg-12">
                                
                                <div class="card">
                                    <div class="row top align-items-center justify-content-around">
                                        <div class="d-flex mb-3 align-items-center">
                                            <i class="uil-transaction mr-4 icconnn"></i>
                                            <div>
                                                <h6 class="text-dark">   {{ transaction.full_name }} </h6> 
                                                <p class="text-muted"> {{ transaction.user.created_at | formatDate }} </p>
                                            </div>
                                        </div>
                                        <h6 class="text-muted"> {{ transaction.reference }} </h6>
                                        <h6 class="text-dark" v-if="transaction.total_amount" >  &#36;{{ transaction.total_amount }} </h6>
                                        <h6 class="text-dark" v-else> &#36;{{ transaction.amount }} </h6>
                                        <!-- <p class="text-muted subb"> {{ transaction.paymentable_type }} </p> -->
                                    </div>
                                    <div class="card-body">
                                        <div class="row justify-content-center align-items-center">
                                            <!-- transaction Icons  -->
                                            <div v-if="transaction.status === 'pending' " class="col-lg-4 col-md-4 col-sm-4 text-center mb-3">
                                               <i class="fa fa-exclamation text-white iconns" aria-hidden="true"></i>
                                            </div>
                                            <div v-if="transaction.status === 'fail'" class="col-lg-4 col-md-4 col-sm-4 text-center mb-3">
                                               <i class="fa fa-times text-white iconns2" aria-hidden="true"></i>
                                            </div> 
                                            <div v-if="transaction.status === 'success'" class="col-lg-4 col-md-4 col-sm-4 text-center mb-3">
                                               <i class="fa fa-check iconns3 text-white" aria-hidden="true"></i>
                                            </div>

                                            <!-- Transaction Details  -->
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Transaction type  </h6>
                                                    <p class="subb text-muted">{{ transaction.paymentable_type }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Transaction ID </h6>
                                                    <p class="subb text-muted text-right">{{ transaction.reference }}</p>
                                                </div>
                                                <hr>
                                                <div v-if="transaction.duration" class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Duration </h6>
                                                    <p class="subb text-muted text-right">{{ transaction.duration }} <span v-if="transaction.duration > 1">Months</span> <span v-else>Month</span>  </p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Amount </h6>
                                                    <p class="subb text-muted text-right">&#36;{{ transaction.amount }}</p>
                                                </div>
                                                <hr>
                                                <div v-if="transaction.total_amount" class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Total Amount </h6>
                                                    <p class="subb text-muted text-right">&#36;{{ transaction.total_amount }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Status </h6>
                                                    <p class="subb text-muted text-right">{{ transaction.status }}</p>
                                                </div>
                                            </div>
                                        </div>
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

import axios from 'axios';

export default {
   data(){
      return {
        id: this.$route.params.id,
        transaction: {},
      }
    },
    methods: {
      close(){
        this.$emit('close');
      }
    },
      
    async created(){
      let res = await axios.get('https://api.fxhup.com/transaction/payments/' + this.id);
      let data = res.data.data;
      this.transaction = data;
    }
}
</script>

<style scoped>
    .subb {
        text-transform: capitalize;
        font-size: 0.8rem ;
    }
    .top {
        background: #f9f9f9;
        box-shadow: 0px 0px 3px 0px #c5c5c5;
        border-radius: 5px;
        padding: 1rem 2rem;
    }
    h6, p {
        padding: 0;
        margin: 0;
    }
    p {
        font-size: 0.6rem;
    }
    .icconnn {
        font-size: 1.5rem;
        border-radius: 50%;
        background-color: #fff ;
        padding: 0.1rem 0.5rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    .iconns {
        font-size: 6rem;
        border-radius: 50%;
        background-color: #ffb20f ;
        padding: 3rem 5rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    .iconns2 {
        font-size: 6rem;
        border-radius: 50%;
        background-color: #ff0000 ;
        padding: 3rem 4rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    .iconns3 {
        font-size: 6rem;
        border-radius: 50%;
        background-color: #00ff00 ;
        padding: 4rem 4rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    @media screen and (max-width: 425px){
        .iconns {
        font-size: 3rem;
        border-radius: 50%;
        background-color: #ffb20f ;
        padding: 1rem 2rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    .iconns2 {
        font-size: 3rem;
        border-radius: 50%;
        background-color: #ff0000 ;
        padding: 1rem 1.5rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    .iconns3 {
        font-size: 3rem;
        border-radius: 50%;
        background-color: #00ff00 ;
        padding: 1rem 1rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
}
</style>