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
                     <div class="col-xl-12">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <div>
                                                <img :src="user.profile.photo" alt="" class="avatar-lg rounded-circle img-thumbnail" width="80" height="80">
                                            </div>
                                            <h5 class="mt-3 mb-1"> {{ user.name }} </h5>
                                            <p class="text-muted">Admin</p>

                                            <div class="mt-4">
                                                <button type="button"  @click="showModal" class="btn btn-danger btn-sm"><i class="uil uil-lock-alt mr-2"></i> Change Password</button>
                                                <password v-show="isModalVisible" @close="closeModal" />
                                            </div>
                                        </div>

                                        <hr class="my-4">

                                        <div class="text-muted text-center">
                                            <div class="table-responsive mt-4">
                                                <div class="mt-4">
                                                    <p class="mb-1">Mobile :</p>
                                                    <h5 class="font-size-12"> {{ user.profile.phone_number }} </h5>
                                                </div>
                                                <div class="mt-4">
                                                    <p class="mb-1">E-mail :</p>
                                                    <h5 class="font-size-12"> {{ user.email }} </h5>
                                                </div>
                                                <div class="mt-4">
                                                    <p class="mb-1">Location :</p>
                                                    <h5 class="font-size-12"> {{ user.profile.address }} </h5>
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
import password from '../../components/changepassword'
export default {
    name: 'videos',
    
    components: {
        // topnav,
        // sidenav,
        password
        // breadcrumb
    }, 
    title () {
    return ` ${this.someValue} | ForexHup`
  }, 
    data(){
        return{
            isModalVisible: false,
            newModal: false,
            someValue:'Profile',
            user: {},

        }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      
      closeModal() {
        this.isModalVisible = false;
      },
       getUser() {  
         axios.get('https://api.fxhup.com/auth/user')
         .then((response) => {
            this.user = response.data.data;
         })
       },
       
       },
    created(){
         this.currentRoute;
    },
    mounted(){
        this.getUser()
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