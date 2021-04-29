<template>
<div id="app">  
    <sidenav v-if="isLoggedIn"></sidenav>
    <topnav v-if="isLoggedIn"></topnav>
    <div>
      <router-view></router-view> 
    </div>
</div>
</template>

<script>
import themeChanger from './js/theme'
import topnav from './views/static/nav'
import sidenav from './views/static/sidebar'

export default {
  name: 'App',
  components: {
      // login,
      // maincontent
        topnav,
        sidenav,
  },
  data(){
    return {
      // themeChanger: null,
    }
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    },
    
  },

  
  created() {
    this.themeChanger = new themeChanger();
    
  },
  computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
      },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');
@import url("../public/static/css/app-style.css");
@import url("../public/static/css/bootstrap.min.css");

#app{
  font-family: 'DM Sans', sans-serif !important;
}

</style>
