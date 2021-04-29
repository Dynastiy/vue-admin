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
                          <div class="row mb-3  top align-items-center">
                                        <div class="">
                                            <div>
                                                <h2 class="text-white">   {{ item.name }} </h2> 
                                                <p class="text-muted subb"> {{ item.role.name }} </p>
                                            </div>
                                        </div>
                                    </div>
                          <div class="row">
                            
                              <div class="col-lg-12">
                                
                                <div class="card">
                                    
                                    <div class="card-body">
                                        <div class="row justify-content-center align-items-center">
                                            <!-- User Thumbnail  -->
                                            <div class="col-lg-4 col-md-4 col-sm-6 text-center"> 
                                              <img class="text-center mb-3"  :src = "item.profile.photo" width="200" height="200" alt="" >
                                            </div>

                                            <!-- User Details  -->
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> User Name  </h6>
                                                    <p class="subb text-muted">{{ item.name }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Email </h6>
                                                    <p class="sub text-muted text-right">{{ item.email }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Phone Number </h6>
                                                    <p class="subb text-muted text-right">{{ item.profile.phone_number }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Address </h6>
                                                    <p class="subb text-muted text-right">{{ item.profile.address }}</p>
                                                </div>
                                                <hr>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h6 class="subb"> Country </h6>
                                                    <p class="subb text-muted text-right">{{ item.profile.country }}</p>
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
import axios from 'axios'
// import AuthService from '@/services/AuthService.js';
export default {
    name: 'modal',
    data(){
      return{
       item: {},
        id: this.$route.params.id,
      }
    },

    methods: {
      close() {
        this.$emit('close');
      },
    },
    async created(){
         this.currentRoute;
        axios.get(`https://api.fxhup.com/transaction/users/${this.id}`).
        then((response) => {
            this.item = response.data.data;
        })

    }
}
</script>
<style scoped>
    .subb {
        text-transform: capitalize;
        font-size: 0.8rem ;
    }
    .sub {
      font-size: 0.8rem ;
    }
    .top {
        background: #01445f;
        box-shadow: 0px 0px 3px 0px #c5c5c5;
        border-radius: 5px;
        padding: 1rem 2rem;
    }
    .top h2 {
      text-transform: uppercase;
    }
    h6, p, h5, h4, h3, h2 {
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
       