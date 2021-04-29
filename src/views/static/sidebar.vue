<template>
    <div>
        <div class="">
                <aside class="side-bar ">
                    <div id="mySidebar" class="sidebar sidebar-menu">
                        <div class="top-logo-section text-center pb-3 pt-2">
                            <span class="logo-lg">
                                <img src="@/assets/img/icon.png" alt="" width="50%">
                            </span>
                            <span class="logo-sm">
                                <img src="@/assets/img/logo.png" alt="" width="70%">
                            </span>
                        </div>
                        <ul class="list-unstyled ml-4" id="side-menu">
                            <li>
                                <router-link to="/dashboard" class="waves-effect" >
                                    <i class="font-weight-bold uil-home mr-2"></i>
                                    <span class="item">Dashboard</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/transactions" class="waves-effect">
                                    <i class="font-weight-bold uil-transaction mr-2"></i>
                                    <span class="item">Transactions</span>
                                </router-link>
                            </li>

                            <li>
                                <a class=" dropdown-btn waves-effect" id="dropdown">
                                    <i class="font-weight-bold uil-store mr-2"></i>
                                    <span class="">Resources</span>
                                    <span id="iconnn"></span>
                                </a>
                                <ul id="myDropdown" class="dropdown-container sub-menu" aria-expanded="true">
                                    <li><router-link to="/videos" class="sub">Videos</router-link></li>
                                    <li><router-link to="/ebooks" class="sub">PDFs</router-link></li>
                                    <li><router-link to="/robots" class="sub">Robots</router-link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <router-link to="/signals" class="waves-effect">
                                    <ion-icon name="analytics-outline" class="mr-2"></ion-icon>
                                    <span class="item">Signals</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/users" class="waves-effect">
                                    <i class="font-weight-bold uil-user mr-2"></i>
                                    <span class="item">Users</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/messages" class=" waves-effect">
                                    <i class="font-weight-bold uil-comments-alt mr-2"></i>
                                    <span class="item">Contact</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
    </div>
</template>

<script>

// import AuthService from '@/services/AuthService.js'

export default {
    data(){
        return {
            
        };
    },
    
    mounted(){
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var icc = document.getElementById("iconnn");
        icc.textContent = '\u25bc';
        icc.style.fontSize = "14px";
        var i;

        for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        icc.textContent = '\u25bc';
        icc.style.fontSize = "15px";
        } else {
        dropdownContent.style.display = "block";
        icc.textContent = '\u25b2';
        icc.style.fontSize = "14px";
        }
        });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub {
    padding-left: 1.7rem ;
}
@media only screen and (max-width: 768px) {
    .side-bar {
        display: none;
    }
}
</style>