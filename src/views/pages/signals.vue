<template>
   <div id="main">
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
                                        <a href="#" class="mb-3 btn btn-primary left" @click="showModal">
                                            <span class="left icon"><i class="fa fa-plus" aria-hidden="true"></i><span class="arrow-left"></span></span>
                                        </a>
                                        
                                        <addSignal v-show="isModalVisible" @close="closeModal" />
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
                                        <!-- <div class="table-responsive">
                                          <table class="table gfg  table-centered table-nowrap mb-">
                                            <thead class="thead-light">
                                                <tr class="bg-dark">
                                                <th scope="col">SYMBOL</th>
                                                <th scope="col">LAST</th>
                                                <th scope="col">CHG</th>
                                                <th scope="col">CHG %</th>
                                                <th scope="col">HIGH</th>
                                                <th scope="col">LOW</th>
                                                <th scope="col">PLAN</th>
                                                <th scope="col">STATUS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                   <tr id="tr" v-for="(signal, index) in signalList" :key="index"  :class="[signal.result]" >
                                                        <td> {{ signal.symbol }} </td>
                                                        <td> {{ signal.last }} </td>
                                                        <td> {{ signal.chg }} </td>
                                                        <td>  {{ signal.chg_per }}%</td>
                                                        <td>  {{ signal.high }} </td>
                                                        <td>  {{ signal.low }} </td>
                                                        <td>  {{ signal.plan.name }} </td>
                                                        <td>
                                                            {{ signal.result }}
                                                        
                                                                <i class="fa fa-check mr-3 ml-3 text-success"  @click="makeSuccess(signal)" aria-hidden="true"></i>
                                                                <i class="fa fa-times text-danger"  @click="makeFail(signal)" aria-hidden="true"></i>
                                                        
                                                        </td>

                                
                                                    </tr> 
                                            </tbody>
                                            </table>
                                        </div> -->
                                        <div>
                                            <div class="row justify-content-between mb-3 font-weight-bold">
                                                <div class="col">SYMBOL</div>
                                                <div class="col">LAST</div>
                                                <div class="col">CHG</div>
                                                <div class="col">CHG %</div>
                                                <div class="col">HIGH</div>
                                                <div class="col">LOW</div>
                                                <div class="col">PLAN</div>
                                                <div class="col">STATUS</div>
                                            </div>
                                            <div class="">
                                                <div class="signalContent row justify-content-between mb-2 py-2 align-items-center" id="tr" v-for="(signal, index) in signalList" :key="index"  :class="[signal.result]" >
                                                        <div class="col font-weight-bold"> <span> <i class="fa fa-line-chart mr-2" aria-hidden="true"></i> </span> {{ signal.symbol }} </div>
                                                        <div class="col"> {{ signal.last }} </div>
                                                        <div class="col"> {{ signal.chg }} </div>
                                                        <div class="col">  {{ signal.chg_per }}%</div>
                                                        <div class="col">  {{ signal.high }} </div>
                                                        <div class="col">  {{ signal.low }} </div>
                                                        <div class="col font-weight-bold text-capitalize">  {{ signal.plan.name }} </div>
                                                        <div class="col font-weight-bold d-flex align-items-center">
                                                            
                                                            <button  class="btn btn-res btn-primary  ">
                                                                {{ signal.result }}
                                                            </button>
                                                            <div title="Change Status" class="btn-group dropleft">
                                                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                    <i class="fa fa-arrow-circle-left text-white " aria-hidden="true"></i>
                                                                </button>
                                                                <div class="dropdown-menu">
                                                                    <!-- Dropdown menu links -->
                                                                    <i class="fa fa-check mr-3 ml-3 text-success"  @click="makeSuccess(signal)" aria-hidden="true"></i>
                                                                <i class="fa fa-times text-danger"  @click="makeFail(signal)" aria-hidden="true"></i>
                                                        
                                                                </div>
                                                            </div>
                                                                <!-- <i class="fa fa-check mr-3 ml-3 text-success"  @click="makeSuccess(signal)" aria-hidden="true"></i> -->
                                                                <!-- <i class="fa fa-times text-danger"  @click="makeFail(signal)" aria-hidden="true"></i> -->
                                                        
                                                        </div>

                                
                                                    </div> 
                                            </div>
                                        </div>

                                        <div class="col">
                                            {{ result }}
                                        </div>
                                        <!-- end signals section -->
                                                                  
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
import axios from 'axios';
import AuthService from '@/services/AuthService'
import addSignal from '../../components/addResource/addSignal'
export default {
    title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        addSignal
    },  
    data(){
        return{
            someValue: "Signals",
            signalList: [],
            page: 1,
            perPage: 5,
            pages: [],
            isModalVisible: false,
            result: '',
            resultArea: '',
        }
    },
    methods: {
         showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
     
     makeSuccess(signal) {
        let payload = { result: "success", signal_id: signal.id};
        axios.post(`https://api.fxhup.com/project/signals/${signal.id}`, payload)
                .then(() => {
                    this.$router.go();
                   
                });
      },
      makeFail(signal) {
        let payload = { result: "failed", id: signal.id};
        axios.post(`https://api.fxhup.com/project/fail/${signal.id}`, payload)
                .then(() => {
                    this.$router.go();
                });
        
      },
    setPages () {
      let numberOfPages = Math.ceil(this.signalList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
        },
        paginate(signalList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  signalList.slice(from, to);
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    },
        displayedPosts() {
      return this.paginate(this.signalList);
    }
    },
    watch: {
    signalList () {
      this.setPages();
    }
    },
   
     async created(){
         this.currentRoute;
         try {
        this.signalList = await AuthService.getSignals();
      } 
        catch (error) {
        console.log(error.response)
      }
    },
}
</script>
<style scoped>
         .gfg {
                border-collapse:separate;
                border-spacing:0 15px;
            }
            .signalContent {
                background: #ffb20f;
                color: #fff;
                border-radius: 5px;
                box-shadow: 3px 3px 0px 0px #efefef;
            }
            .select-area {
                padding: 0.1rem;
                border-radius: 5px;
            }
            .fa:hover {
                cursor: pointer;
            }
            .success {
                background: #5cb85c !important;
                /* border-radius: ; */
            } 
            .fail {
                background: #ff0000;
            }
            .btn-res {
                border: 1px solid #fff;
                background-color: transparent;
                padding: 0.05rem 0.2rem !important;
                width: 6rem;
                height: 1.5rem;
                line-height: 0;
                font-size: 0.7rem;
                font-weight: bold;
                text-transform: capitalize;
            }
</style>