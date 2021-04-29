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
                          </div>
                          <div class="row">
                              <div class="col-lg-12">
                                <div class="card">
                                    <div class="row top align-items-center justify-content-around">
                                        <div class="d-flex align-items-center">
                                            <i v-if="item.type === 'robot' " class="fas fa-robot   mr-4 icconnn "></i>
                                            <i v-if="item.type === 'pdf' " class="fas fa-file-pdf mr-4 icconnn2"></i>
                                            <div>
                                                <h6 class="text-dark">   {{ item.title }} </h6> 
                                                <!-- <p class="text-muted"> {{ transaction.user.created_at }} </p> -->
                                            </div>
                                        </div>
                                        <h6 class="text-muted" v-if="item.status === 'paid' "> &#36;{{ item.price }} </h6>
                                        <h6 class="text-muted" v-else > Free </h6>
                                        <!-- <h6 class="text-dark" v-if="transaction.total_amount" >  &#36;{{ transaction.total_amount }} </h6> -->
                                        <!-- <h6 class="text-dark" v-else> &#36;{{ transaction.amount }} </h6> -->
                                        <!-- <p class="text-muted subb"> {{ transaction.paymentable_type }} </p> -->
                                    </div>
                                    <div class="card-body">
                                        <div class="row justify-content-center align-items-center">
                                            <!-- Resource Thumbnail  -->
                                            <div class="col-lg-4 col-md-4 col-sm-6 text-center">  
                                              <img class="img-books rounded-circle mb-4" :src="item.cover_page" alt="Resource thumbnail" width="150" height="150">
                                            </div>

                                            <!-- Resource Details  -->
                                            <div>
                                          <!-- <h1 class="title"> {{ item.title }} </h1>
                                          <p class="mb-1 mt-1"> {{ item.description }} </p>
                                          <p class="mb-1 mt-1 text-danger title font-weight-bold"> {{ item.status }} </p>
                                          <h4 v-if="item.status === 'paid' " class="text-muted mt-2 mb-2 font-weight-bold"><span class="mr-1">&#36;  {{ item.price }} </span> </h4> -->
                                      </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Resource Name  </h6>
                                                    <p  class="subb text-muted text-uppercase font-weight-bold">{{ item.title }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Description </h6>
                                                    <p class="subb text-muted text-right">{{ item.description }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Resource Type </h6>
                                                    <p class="subb text-muted text-right">{{ item.type }}</p>
                                                </div>
                                                <hr>
                                                <div v-if="item.status === 'paid' " class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Total Amount </h6>
                                                    <p class="subb text-muted text-right">&#36;{{ item.price }}</p>
                                                </div>
                                                <div  class="d-flex align-items-center justify-content-between" v-else>
                                                    <h6 class="subb"> Price </h6>
                                                    <p class="subb text-muted text-right">Free</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Status </h6>
                                                    <p class="subb text-muted text-right">{{ item.status }}</p>
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
        item: {},
      }
    },
    methods: {
      close(){
        this.$emit('close');
      }
    },
      
    async created(){
      let res = await axios.get('https://api.fxhup.com/project/resource/view/' + this.id);
      let data = res.data.data;
      this.item = data;

      console.log(this.item)
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
        padding: 0.5rem 0.5rem;
        box-shadow: 0px 0px 3px 0px #e5e5e5;
    }
    .icconnn2 {
        font-size: 1.5rem;
        border-radius: 50%;
        background-color: #fff ;
        padding: 0.5rem 0.7rem;
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
</style>