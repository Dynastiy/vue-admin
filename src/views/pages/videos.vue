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
                                    
                                    <div class="page-title-right mb-3">
                                        <!-- <button class="bbtn alt mb-0" @click="showModal"><span class="add">+</span> Add Video</button> -->
                                        <a href="#" @click="showModal" class="btn btn-primary left">
                                            <span class="left icon"><i class="fa fa-plus" aria-hidden="true"></i><span class="arrow-left"></span></span>
                                           
                                        </a>
                                        <addVideo v-show="isModalVisible" @close="closeModal" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    <!-- end page title -->

                    <!--Other Page Content Continues here-->
                    <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Videos</h4>
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
                                        <!-- <div class="table-responsive">
                                            <table class="table table-centered table-nowrap mb-0">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th style="width: 20px;">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                <label class="custom-control-label" for="customCheck1">&nbsp;</label>
                                                            </div>
                                                        </th>
                                                        <th>Video Name</th>
                                                        <th>Description</th>
                                                        <th>Status</th>
                                                        <th>Price</th>
                                                        <th>Actions</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(videoItem, id) in videoList" :key="id">
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                                                <label class="custom-control-label" for="customCheck2">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td><a class="text-body font-weight-bold">{{ videoItem.title }}</a> </td>
                                                        <td> {{ videoItem.description }} </td>
                                                        <td>
                                                            {{ videoItem.status }}
                                                        </td>
                                                        <td>
                                                           &#36;{{ videoItem.price }}
                                                        </td>
                                                        <td>
                                                            <i class="fa fa-pencil mr-3 text-success" aria-hidden="true"></i><i @click="deleteData(videoItem)" class="fa fa-trash text-danger" aria-hidden="true"></i>
                                                        </td>
                                                        <td>
                                                            <router-link :to="'/video/'+ videoItem.id" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> -->
                                        <!-- end table-responsive -->

                                                            
                                        <div class="btn-group col-md-2 offset-md-5 mt-3">
                                            <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> Back </button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" v-for="(pageNumber, index) in pages.slice(page-1, page+5)" :key="index" @click="page = pageNumber"> {{pageNumber}} </button>
                                            <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
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
import Swal from 'sweetalert2';
import axios from'axios';
import addVideo from '../../components/addResource/addVideoModal'
export default {
     title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        addVideo,
    },  
    data(){
        return{
            isModalVisible: false,
            someValue: "Videos",
            videoList: '',
            page: 1,
            perPage: 10,
            pages: [],
        }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
     
      getData() {  
         axios.get('https://api.fxhup.com/project/resource/types')
         .then((response) => {
            this.videoList = response.data.data.videos.data
         })
      },
      deleteData(videoItem) {  
         axios.delete(`https://api.fxhup.com/project/resource/delete/${videoItem.id}`)
         .then(() => {
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
             this.$router.go();
                })
         })
      },
       setPages () {
      let numberOfPages = Math.ceil(this.videoList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
        },
        paginate(videoList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  videoList.slice(from, to);
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
        displayedPosts() {
      return this.paginate(this.videoList);
    }
    },
    watch: {
    videoList () {
      this.setPages();
    }
    },
    mounted(){
        this.getData()
    },
}
</script>
<style scoped>
.card-video * {
    padding: 0;
    margin: 0;
}
.card-video h6 {
    text-shadow:  #000;
    color: #01445f !important;
}
.card-video h6:nth-child(2){
    color: #ffb20f !important;
}
.img-books {
    width: 100%;
}
.fa:hover {
    cursor: pointer;
}
.video {
    width: 100%;
    height: 10rem;
    border-radius: 5px;
    margin-bottom: 0.8rem;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
}

</style>