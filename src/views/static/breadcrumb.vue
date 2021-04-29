<template>
    <div>
         <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0">  {{ currentRouteName }} </h4>
                    
                    <!-- <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Forexhup</a></li>
                            <li class="breadcrumb-item active"> <router-link :to={currentRouteName}>  {{ currentRouteName }} </router-link> </li>
                        </ol>
                    </div> -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
        // routeName: null,
    };
},

    created(){
        this.currentRoute;
        //this.nombreRuta = this.$route.name;
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