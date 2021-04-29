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
                                    
                                    <div class="page-title-right">
                                        <!-- <button class="bbtn alt mb-0" @click="showModal"><span class="add">+</span> Add Video</button> -->
                                        <!-- <a href="#" @click="showModal" class="bbtn modbtn left"> -->
                                        <a href="#" @click="showModal" class="mb-3 btn btn-primary left">
                                            <span class="left icon"><i class="fa fa-plus" aria-hidden="true"></i><span class="arrow-left"></span></span>
                                            
                                        </a>
                                        <robotsmodal v-show="isModalVisible" @close="closeModal" />
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
                                        <h4 class="card-title mb-4">{{ currentRouteName }}</h4>
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
                                                    <tr v-for="(robotItem, id) in displayedPosts" :key="id">
                                                        <td class="text-uppercase"><a class="text-body font-weight-bold">{{ robotItem.title }}</a> </td>
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
                                                        <td class="tt">
                                                            <i class="fa fa-pencil mr-3 text-success" type="button" data-toggle="modal" data-target="#exampleModalCenter" aria-hidden="true"></i>
                                                            <i @click="deleteData(robotItem)" class="fa fa-trash text-danger" aria-hidden="true"></i>
                                                        </td>
                                                        <td>
                                                            <!-- Button trigger modal -->
                                                            <router-link :to="'/resource/'+ robotItem.id" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </router-link>
                                                            <!-- <viewResource :item="item" v-show="isResourceVisible" @close="closeResource" /> -->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

       <!-- Button trigger modal -->
            <button>
            Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                     <slot name="body">
                        <div class="row input-item">
                            <div class="form-group col-xl-4 col-md-4 col-sm-6 input-item">
                            <label for="exampleFormControlInput1">Name of resource</label>
                            <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                            </div>
                            <div class="col-xl-4 col-md-6 col-sm-6 input-item">
                                <label for="">Status</label>
                                <select v-on:change="changedPrice()" id="mySelect" class="custom-select" v-model="status">
                                <option value="1">Free</option>
                                <option value="2">Paid</option>
                                </select>
                            </div>
                            <div class="form-group col-xl-4 col-md-4 col-sm-6 input-item">
                            <label for="exampleFormControlInput2">Price</label>
                            <input :disabled="disabled" v-model="price" type="number" class="form-control" id="exampleFormControlInput2" placeholder=" $ ">
                            </div>
                        </div>
                        <div class="form-group mt-1">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <label class="small-text" for="">Click to add Robot</label>
                            <input type="file" name="" id="file" ref="file" v-on:change="handleFileUpload()">
                        </div>
                        <div class="col-md-6">
                            <label class="small-text" for="">Click to add Thumbnail</label>
                            <input type="file" name="" id="file2" ref="file2" v-on:change="handleFileUpload2()">
                        </div>
                        </div>

                </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
import axios from'axios';
import AuthService from '@/services/AuthService'
import robotsmodal from '../../components/addResource/addRobotModal'
// import viewResource from '../../components/views/viewResource'
export default {
    title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        robotsmodal,
        // viewResource
    },  
    data(){
        return{
            isModalVisible: false,
            someValue: "Robots",
            robotList: [],
            page: 1,
            perPage: 6,
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
      deleteData(robotItem) {  
         axios.delete(`https://api.fxhup.com/project/resource/delete/${robotItem.id}`)
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
      let numberOfPages = Math.ceil(this.robotList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
        },
        paginate(robotList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  robotList.slice(from, to);
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
        displayedPosts() {
      return this.paginate(this.robotList);
    }
    },
    watch: {
    robotList () {
      this.setPages();
    }
    },
    async created(){
         this.currentRoute;
         try {
        this.robotList = await AuthService.getRobot();
        // console.log(this.videoList);
      } 
        catch (error) {
        console.log(error.response)
      }
    },
}
</script>
<style scoped>

.img-books {
    width: 100%;
}
.tt:hover {
    cursor: pointer;
}
.modal-dialog {
    border-radius: 0 !important;
}
</style>