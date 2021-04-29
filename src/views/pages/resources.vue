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

                    <!--Videos-->
                    <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4 text-primary">Videos</h4>
                                        <div class="videoTable row" >
                                            <div class="col-lg-3 col-md-3 col-sm-6 mb-3" v-for="(videoItem, id) in videoList" :key="id">
                                               <div class="card-video">
                                                    <div class="videoView">
                                                       <video controls :src="videoItem.file" allowFullScreen frameborder="0" class="video" ></video>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <!-- <img :src="videoItem.cover_page" alt="" width="30" height="30"> -->
                                                        
                                                        <!-- <p class="status" > {{ videoItem.status }} </p> -->
                                                        <h6> {{ videoItem.title }} </h6>
                                                        
                                                        <h6 v-if="videoItem.status === 'paid' "> &#36; {{ videoItem.price }} </h6>
                                                        <h6 v-else> {{ videoItem.status }} </h6>
                                                        <!-- <i class="fa fa-pencil mr-3 text-success" aria-hidden="true"></i><i @click="deleteData(videoItem)" class="fa fa-trash text-danger" aria-hidden="true"></i> -->
                                                    </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container text-right mb-4">
                                        <router-link class="text-muted" to="/videos">View More>>> </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pdfs -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4 text-primary">PDFs</h4>
                                        <div class="table-responsive">
                                            <table class="table table-centered table-nowrap mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>PDF Name</th>
                                                        <th>Description</th>
                                                        <th>Status</th>
                                                        <th>Price</th>
                                                        <th>Actions</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                     <tr v-for="(pdfItem, id) in pdfList" :key="id">
                                                        <td><a class="text-body font-weight-bold">{{ pdfItem.title }}</a> </td>
                                                        <td> {{ pdfItem.description }} </td>
                                                        <td>
                                                            {{ pdfItem.status }}
                                                        </td>
                                                        <td v-if="pdfItem.status === 'paid' ">
                                                             &#36; {{ pdfItem.price }}
                                                        </td>
                                                        <td v-else>
                                                            {{ pdfItem.status }}
                                                        </td>
                                                        <td>
                                                            <router-link :to="'/resource/'+ pdfItem.id" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="container text-right mb-4">
                                        <router-link class="text-muted" to="/ebooks">View More>>> </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                        <!-- Robots  -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4 text-primary">Robots</h4>
                                        <div class="table-responsive">
                                            <table class="table table-centered table-nowrap mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Robot Name</th>
                                                        <th>Description</th>
                                                        <th>Status</th>
                                                        <th>Price</th>
                                                        <th>Actions</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(robotItem, id) in robotList" :key="id">
                                                        <td class="text-capitalize"><a class="text-body font-weight-bold">{{ robotItem.title }}</a> </td>
                                                        <td class="text-capitalize"> {{ robotItem.description }} </td>
                                                        <td class="text-capitalize">
                                                            {{ robotItem.status }}
                                                        </td>
                                                        <td v-if="robotItem.status === 'paid' ">
                                                             &#36; {{ robotItem.price }}
                                                        </td>
                                                        <td class="text-capitalize" v-else>
                                                            {{ robotItem.status }}
                                                        </td>
                                                        <td>
                                                            <router-link :to="'/resource/'+ robotItem.id" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- end table-responsive -->
                                    </div>
                                    <div class="container text-right mb-4">
                                        <router-link class="text-muted" to="/robots">View More>>> </router-link>
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

export default {
    components:{
       
    },
    data(){
        return{
            videoList: [],
            pdfList:[],
            robotList: []
        }
    },
    methods: {
        getData(){  
         axios.get('https://api.fxhup.com/project/resource/types')
         .then((response) => {
            this.videoos = response.data.data.videos.data;
            this.videoList = this.videoos.slice(0, 4);

            this.pddf = response.data.data.pdf.data;
            this.pdfList = this.pddf.slice(0,4);

            this.roboots = response.data.data.robots.data;
            this.robotList = this.roboots.slice(0,4);
         })
      }
    },
    mounted(){
        this.getData();
    },
     computed: {
        currentRouteName() {
        return this.$route.name;
    }
     }
}
</script>

<style scoped>
    .video {
    width: 100%;
    height: 10rem;
    border-radius: 5px;
    margin-bottom: 0.8rem;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
    }
    .card-video h6 {
    text-shadow:  #000;
    color: #01445f !important;
}
.card-video h6:nth-child(2){
    color: #ffb20f !important;
}

</style>