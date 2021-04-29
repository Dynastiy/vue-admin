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
                    <div class="row" id="userArea">
                        
                        <div class="col-sm-3" v-for="(user, index) in userList" :key="index">
                            <router-link :to=" '/user/' + user.id ">
                                    <div class="card">
                                        <div class="card-body">
                                            <img :src="user.profile.photo" class="rounded-circle text-center" alt="" width="40" height="40">
                                            <h5 class="mt-2 card-title">  {{ user.name }} </h5>
                                            <!-- <p v-if="user.profile.address" class="card-text text-dark"> {{ user.profile.address }} </p> -->
                                            <router-link :to=" '/user/' + user.id " class="text-muted small-text">View More >>>  </router-link>
                                        </div>
                                    </div>
                                </router-link>
                        </div>
                        
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
    // import userDetails from '../../components/views/viewUser'
    import AuthService from '@/services/AuthService'
export default {
    name: 'videos',
    components: {
        // userDetails
    },  
     title () {
    return ` ${this.someValue} | ForexHup`
  },
    data(){
        return{
            someValue: "Users",
            userList: [],
            id: this.$route.params.id,
            item: {},

        }
    },
    methods: {
        viewUser(user){
            let details = document.getElementById("userDetails");
            details.classList.toggle("details-close");
            axios.get(`https://api.fxhup.com/transaction/users/${user.id}`).
            then((response) => {
            this.item = response.data.data;
        })
        },
    },
    async created(){
        this.currentRoute;
        try{
        this.userList = await AuthService.getUsers();
        console.log(this.userList);
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
.btnBuy {
    padding: 0.2rem 0.4rem;
    border-radius: 0;
    font-size: 0.8rem;
}
.img-books {
    width: 30%;
    height: 30%;
    border-radius: 50%;
}
.user-card {
    background: #fff;
}
.card-body {
    border-left: 2px solid #0392ce;
}
.user-details {
    min-height: 500px;
    position: fixed;
    top: 9.15rem;
    right: 0;
    width: 0;
    transition: width 1s;
    background: #e5e5e5;
    box-shadow: 0px 0px 5px 0px rgba(202, 202, 202, 0.6);
    overflow-x: hidden;
    z-index: 1;
}
.user-content {
    margin-top: 1rem ;
    height:fit-content;
}
.small-text:hover, .fa:hover {
    cursor: pointer;
}
.details-close{
    width: 17rem;
}
.card:hover {
    transform: translate(10px, 10px);
}
</style>