<template>
    <div id="main">
       <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 class="mb-3">  {{ currentRouteName }} </h4>
                                </div>
                            </div>
                        </div>

                    <div>
                        <div class="w-100 user-chat mt-4 mt-sm-0 ml-lg-1" v-for= "(message, index) in messages" :key="index" >
                            <div class="user-card mb-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="namem">  <i class="fa fa-envelope mr-3 text-muted" aria-hidden="true"></i> {{ message.name }} </h6>
                                    <h6 v-if="message.email === null ">  <i class="fa fa-envelope mr-3 text-muted" aria-hidden="true"></i> {{ message.email }} </h6>
                                </div>
                                <div class="mt-1">
                                    <p class="text-primary small"> {{ message.message }} </p>
                                    <p class="text-right small"> <i class="fa fa-trash text-danger mr-5" aria-hidden="true"></i> {{ message.created_at | formatDate }} </p>
                                    
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


import AuthService from '@/services/AuthService'

export default {
    title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
       
    },  
    data(){
        return {
             someValue: 'Contact',
             messages: [],
        }
    },
        async created(){
         this.currentRoute;
         try{
          this.messages = await AuthService.getMessages();
        console.log(this.messages);
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
* {
    padding: 0;
    margin: 0;
}
.user-card{
    background: #fff;
    padding: 1rem 2rem ;
    box-shadow: 0px 0px 5px 0px #999999a1;
    /* border-left:2px solid #01445f ; */
    border-left: 2px solid #0392ce;
}
.namem {
    text-transform: uppercase;
}

</style>