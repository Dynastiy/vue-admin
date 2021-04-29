<template>
    <div class="log">
        <div class="">
            <ul class="mr-auto ml-auto mt-4 list-group text-center alert alert-danger w-50" v-if="errors.length > 0">
                <li class="list-group-item" v-for="error in errors" :key="errors.indexOf(error)">
                {{ error }}
                </li>
            </ul>
        </div>

        <div class="mt-3 text-center">
            <img src="@/assets/img/logo.png" class="logo1" alt="" srcset="" width="10%">
        </div>
            <div class="login mb-3">
                <div>
                    <h2 class="mb-3 text-center">Welcome Back</h2>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input-before"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control pass" v-model="email" aria-label="" placeholder="Email">
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text input-before"><i class="fa fa-lock" aria-hidden="true"></i></span>
                    </div>
                    <input :type="type" class="form-control pass" v-model="password" aria-label="" placeholder="Password">
                    <div class="input-group-append ">
                        <span class="input-group-text btn input-after" @click="showPassword"> <i :class="name" aria-hidden="true"></i> </span>
                    </div>
                </div>


                <!-- <button class="btn my-3 py-4 btn-login"> -->
                    <button @click="login" class="btn my-3 py-3 btn-login text-white"> Login</button>
                <!-- </button> -->
                <h6 class="text-center">By clicking Login, you agree to our <span class="terms">terms and conditions</span></h6>
                <div>
                </div>
            </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService.js';
import Swal from 'sweetalert2';

export default {
     title () {
    return ` ${this.someValue} | ForexHup`
  },
    components: {
        // bg
    },
    data(){
        return{
            someValue: "Login",
            email: '',
            password: '',
            msg: '',
            errors: '',
            type: "password",
            name: 'fa fa-eye',
        }

    },
     methods: {
         showPassword() {
            if(this.type === 'password') {
                this.type = 'text';
                this.btnText = "Hide Password";
                this.name = 'fa fa-eye-slash'
            } else {
                this.type = 'password';
                this.btnText = "Show Password";
                this.name = 'fa fa-eye'
            }
            },
        async login() {
            this.errors = [];
            try {
                const credentials = {
                email: this.email,
                password: this.password
                };
                const response = await AuthService.login(credentials);
                const token = response.data.token;
                const user = response.data.user;
                this.$store.dispatch('login', { token, user });
                this.$router.push('/dashboard');
                Swal.fire(
                    "Welcome Back",
                    'You are logged in!',
                    'success'
                    )
                } 
                catch (error) {
                console.log(error.response)
                if (error.response.status == 422 || error.response.status === '' ) {
                this.errors.push("We couldn't verify your login details.");
                this.email = '';
                this.password = '';
                } else {
                this.errors.push("Something went wrong, please refresh and try again.");
                this.email = '';
                this.password = '';
                }
            }
        },
  }
}
</script>

<style scoped>
.login {
    /* position: absolute; */
    /* z-index: 999; */
    width: 30rem;
    margin: 0 auto !important;
    /* left: 40%; */
    margin-top: 2rem !important ;
    background: #fff;
    padding: 2rem !important;
    /* height: 34rem; */
    box-shadow: 5px 5px 0px 0px #efefef;
    border-radius: 5px;
    padding-bottom: 2rem !important;
    margin-bottom: 2rem !important;
}
.login  h1 {
    color: #0392ce;
}
.login a {
    font-size: 1rem !important;
    color: #0392ce;
}
.login a:hover {
    text-decoration: none;
}
.form-control {
    height: 3rem !important;
    padding: 0 !important;
    border: none !important;
}
.input-group-prepend {
    border: 0 !important;
}
.input-group {
    border: 1px solid #efefef !important;
    border-radius: 5px;
}
.mail {
    border: none !important;
    margin: 0 auto;
    width: 21.3rem !important;
    height: 2.5rem !important;
}
.mail:focus {
    outline: none !important;
}
.mail::placeholder {
    font-size: 0.8rem;
    color: #999;
}
.icon {
    margin-right: 0.7rem !important;
    color: #999;
    font-size: 1.5rem;
    position: relative;
    top: 5%;
    margin-left: 0.3rem !important;
}

.input-before, .input-after {
    background: none !important;
    border: none !important;
    /* border: 1px 1px 0px 1px !important; */
}
.pass::placeholder {
    font-size: 0.8rem;
    color: #999;
    margin-left: 3rem;
}
.pass:focus {
    outline: none;
}
.btn-login {
    width: 100% !important;
    text-transform: uppercase;
    color: #fff !important;
    font-size: 0.8rem !important;
    font-weight: bold;
    background: #0392ce;
    border: none;
}
.btn-login:hover {
    background: #01445f;
    transition: 2s;
}
.btn-login router-link {
    color: #fff !important;
    text-decoration: none !important;
}
.terms {
    color: #0392ce;
}
@media only screen and (max-width: 425px) {
    .login {
        width: 80% !important;
        margin-top: 3rem !important;
    }
    .logo1 {
        width: 40%;
        margin-top: 2rem;
    }
}
</style>