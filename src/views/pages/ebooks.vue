<template>
    <div id="main">
       
       <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">
                    <!-- start page title -->
                    <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 class="mb-0">  {{ currentRouteName }} </h4>
                                    
                                    <div class="page-title-right">
                                        <!-- <button class="btn btn-success btnBuy mb-0" @click="showModal">+ Add E-Book</button> -->
                                        <!-- <a href="#" @click="showModal" class="bbtn modbtn left"> -->
                                            <a href="#" @click="showModal" class="mb-3 btn btn-primary left">
                                            <span class="left icon"><i class="fa fa-plus" aria-hidden="true"></i><span class="arrow-left"></span></span>
                                            <!-- <span class="right title">Add E-Book</span> -->
                                        </a>
                                        <ebooksmodal v-show="isModalVisible" @close="closeModal" />
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
                                        <h4 class="card-title mb-4">PDFs</h4>
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
                                                        <td class="text-uppercase"><a class="text-body font-weight-bold">{{ pdfItem.title }}</a> </td>
                                                        <td class="text-capitalize"> {{ pdfItem.description }} </td>
                                                        <td class="text-capitalize">
                                                            {{ pdfItem.status }}
                                                        </td>
                                                        <td v-if="pdfItem.status === 'paid' ">
                                                             &#36; {{ pdfItem.price }}
                                                        </td>
                                                        <td class="text-capitalize" v-else>
                                                            {{ pdfItem.status }}
                                                        </td>
                                                        <td class="tt">
                                                            <i class="fa fa-pencil mr-3 text-success" aria-hidden="true"></i><i @click="deleteData(pdfItem)" class="fa fa-trash text-danger" aria-hidden="true"></i>
                                                        </td>
                                                        <td>
                                                            <!-- Button trigger modal -->
                                                            <router-link :to="'/resource/'+ pdfItem.id" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                View Details
                                                            </router-link>
                                                            <!-- <videoview v-show="newModal" @close="closeModal2" /> -->
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
    </div>
</template>
<script>
import Swal from 'sweetalert2';
import axios from'axios';
import AuthService from '@/services/AuthService'
import ebooksmodal from '../../components/addResource/addEbookModal'
// import ebookview from '../../components/ebookview'
export default {
    title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        // topnav,
        // sidenav,
        ebooksmodal,
        // ebookview
        // breadcrumb
    },  
    data(){
        return{
            isModalVisible: false,
            newModal: false,
            someValue: 'E-Books',
            pdfList: [],
            page: 1,
            perPage: 6,
            pages: [],
            // alert: true
        }
    
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
     deleteData(pdfItem) {  
         axios.delete(`https://api.fxhup.com/project/resource/delete/${pdfItem.id}`)
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
      let numberOfPages = Math.ceil(this.pdfList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
        },
        paginate(pdfList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  pdfList.slice(from, to);
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
        displayedPosts() {
      return this.paginate(this.pdfList);
    }
    },
    watch: {
    pdfList () {
      this.setPages();
    }
    },
    async created(){
         this.currentRoute;
         try {
        this.pdfList = await AuthService.getPDF();
      } 
        catch (error) {
        console.log(error.response)
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
    width: 100%;
}
.tt:hover {
    cursor: pointer;
}
</style>