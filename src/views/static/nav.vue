<template>
    <div>
       <div class="navbar-header" id="nav-header">
                <nav class="navbar py-3 navbar-expand-lg navbar-light bg-white">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <button class="btn openbtn mr-2" onclick="navbtn()"><i class="fa fa-bars" aria-hidden="true"></i></button>  
                        <div class="input-group w-50 groupIcon">
                            <div class="input-group-prepend ">
                                <span class="input-group-text inpIcon" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></span>
                              </div>
                            <input type="text" class="form-control search" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                            
                        </div>
                        <ul class="navbar-nav ml-auto align-items-center">
                            <li class="nav-item">
                            <a class="nav-link dropdown-btn align-items-center" href="#">
                                <img src="@/assets/img/users/avatar-2.jpg" class="avatar-img mr-2 rounded-circle" alt="" width="22">
                                <span class="small-text font-weight-bold">Admin</span>
                                <span class="small-text"><i class="ml-2 fa fa-caret-down" aria-hidden="true"></i></span>
                            </a>
                            <ul class="dropdown-container2 list-unstyled sub-menu px-3 py-3" aria-expanded="false">
                                <li class="mb-2">
                                    <router-link to="/profile"><span class="text-muted small-text"><i class="mr-2 fa fa-user-circle-o" aria-hidden="true"></i> Profile</span></router-link>
                                </li>
                                <li>
                                    <span class="text-muted small-text" @click="logout"><i class="mr-2 fa fa-cog" aria-hidden="true"></i> Logout</span>
                                </li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <!-- Navigation Bar to display on Mobile Screens -->
            <div class="mobile-nav p-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <i class="fa fa-bars" aria-hidden="true" @click="openNav"></i>
                    </div>
                    <div>
                        <img src="@/assets/img/users/avatar-2.jpg" class="avatar-img mr-2 rounded-circle" alt="" width="23">
                        <span class="small-text font-weight-bold">Admin</span>
                        <!-- <span class="small-text"><i class="ml-2 fa fa-caret-down" @click="showMenu" aria-hidden="true"></i></span> -->
                    </div>
                </div>     
            </div>

                 <div class="sideArea" id="sidee">
                     <ul>
                         <li class="" @click="closeNav"> <span>  <img src="@/assets/img/logo.png" alt="" width="50%"> </span> <i class="fa fa-bars ml-5" aria-hidden="true"></i></li>
                         <li class="mt-3" id="list-Nav"> <router-link to="/dashboard"> <i class="uil-home mr-2"></i> Dashboard </router-link></li>
                         <li class="" id="list-Nav"> <router-link to="/transactions"> <i class="uil-transaction mr-2"></i> Transactions </router-link></li>
                         <li class="" id="list-Nav"> <router-link to="/resources"> <i class="uil-store mr-2"></i> Resources </router-link></li>
                         <li class="" id="list-Nav"> <router-link to="/signals"> <i class="uil-signal mr-2"></i> Signals </router-link> </li>
                         <li class="" id="list-Nav"> <router-link to="/users"> <i class="uil-user mr-2"></i> Users </router-link> </li>
                         <li id="list-Nav"> <router-link to="/messages"> <i class="uil-comments-alt mr-2"></i> Contact </router-link> </li>
                         <li id="list-Nav">
                            <i class="fa fa-cogs mr-2" aria-hidden="true"></i>
                            <router-link to="/profile"> Profile</router-link>
                         </li>
                         <li class="list-Nav">
                             <i class="fa fa-power-off mr-2" aria-hidden="true"></i>
                            <a @click="logout"> Logout </a>
                         </li>
                     </ul>
                 </div>
    </div>
</template>
<script>
    
    import themeChanger from '../../js/theme'   
    // import AuthService from '@/services/AuthSservice.js';
export default {
    data(){
        return {
            // name: '',
            // item: {},
            side: false,
            themeChanger: null,
        };
    },
    methods: {
            logout() {
            this.$store.dispatch('logout');
            this.$router.push('/');
            },
            darkThemeSwitch() {
            this.themeChanger._darkThemeSwitch();
            },
            openNav(){
                    let navSide = document.getElementById('sidee');
                    let contNav = document.getElementsByTagName("LI");
                    let i = 0;
                    for (i=0; i < contNav.length; i++)
                    contNav[i].style.fontSize = "13px";
                    navSide.style.width = "200px";
                },
            closeNav(){
                var navSide = document.getElementById('sidee');
                let contNav = document.getElementsByTagName("LI");
                let i = 0;
                for (i = 0; i < contNav.length; i++)
                contNav[i].style.fontSize = "0px";
                navSide.style.width = "0px";
                }, 
            // bodyClose(){
            //     sideBarOpen = false; 
            //     $( document ).click(function( event ) {
            //         var target = $( event.target );
            //         if(sideBarOpen){
            //             this.closeNav();
            //         } else {
            //             if(target.is( '#sidee' )){
            //             this.closeNav();
            //             }
            //         }
            //     }
            // }
           
        },
  mounted() {
    this.themeChanger = new themeChanger();

     
  },

}
</script>
<style scoped>
.switch-text {
    font-size: 1.3rem;
}
.dropdown-container2 span:hover {
    cursor: pointer !important;
}
.mobile-nav {
    display: none;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(212, 212, 212, 0.8);
}
 .sideArea {
        display: none;
        transition: width 0.3s;
        background-color: #e5e5e5 !important;
        width: 0px;
        position: absolute;
        /* top: 5%; */
        /* left: %; */
        top: 0%;
        z-index: 999;
        /* padding: 10px; */
        box-shadow: 0px 0px 5px 0px rgba(212, 212, 212, 0.8);
        min-height: 100%;
    }
    .sideArea li {
        list-style: none;
        font-size: 0px;
        transition: font-size 0.3s;
        padding: 10px 30px;
        font-weight: bold;
    }
    .sideArea li a{
        color: #000;
    }
    .topDrop {
        position: fixed;
        right: 5%;
        background: #fff;
        padding: 0.6rem;
        border-radius: 5px;
        box-shadow: 0px 0px 5px 0px rgba(212, 212, 212, 0.8);
        opacity: 0;
        transition: opacity 1s;
        z-index: 999;
        top: 3%;
    }
    .topDrop a{
        color: #000;
        font-weight: bold;
    }
@media only screen and (max-width: 768px) {
    .header-item, .switch-text {
        font-size: 0.8rem;
    }
    .navbar-header {
        display: none;
    }
    .mobile-nav {
        display: block !important;
    }
    .sideArea{
        display: block;
    }
}
@media screen and (max-width: 990px) {
    .navbar-header {
        display: none;
    }
  .mobile-nav {
        display: block !important;
    }
  }
</style>