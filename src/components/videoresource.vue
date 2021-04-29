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
                                        <!-- <a href="#" @click="showModal" class="mb-3 btn btn-primary left"> -->
                                            <span class="left icon"><i class="fa fa-plus" aria-hidden="true"></i><span class="arrow-left"></span></span>
                                            
                                        <!-- </a> -->
                                    </div>

                                </div>
                            </div>
                        </div>
                    <!-- end page title -->

                    <!--Other Page Content Continues here-->
                    <div class="row">
                            <div class="col-lg-12">       
                              <div class="card-container d-flex align-items-center p-4">
                                <div class="mr-4">
                                  <img class="img-books rounded-circle" :src="item.cover_page" alt="Resource thumbnail" width="100" height="100">
                                </div>
                                <div>
                                    <h3 class="title"> {{ item.title }} </h3>
                                    <p class="mb-1 mt-1"> {{ item.description }} </p>
                                    <p class="mb-1 mt-1 text-danger title font-weight-bold"> {{ item.status }} </p>
                                    <h4 class="text-muted mt-2 mb-2 font-weight-bold"><span class="mr-1">&#36;  {{ item.price }} </span> </h4>
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
/* .wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease; 
}
  .card-container {
    position: absolute;
    left: 35%;
    top: 30%;
    box-shadow: 0px 0px 5px 0px rgba(222, 222, 222, 0.9);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    transition: all 0.3s ease;
    width: 350px;
    margin: 0 auto;
    /* height: 30px; */
  /* } */
  /* .content-enter {
  opacity: 0;
}
.title {
  text-transform: uppercase;
}
.content-leave-active {
  opacity: 0;
}

.content-enter .card-container,
.content-leave-active .card-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}  */
</style>