<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <h3 class="text-danger">Change Password</h3>
                  <button type="button" class="btn btnx btn-lg btn-danger btn-close" @click="close"> x </button>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                    <div class="">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <div>
                                            <div class="input-group mb-3">
                                              <input :type="type" class="form-control pass" v-model="oldPassword" aria-label="" placeholder="Old Password">
                                              <div class="input-group-append ">
                                                  <span class="input-group-text btn input-after" @click="showPassword1"> <i :class="name" aria-hidden="true"></i> </span>
                                              </div>
                                            </div>
                                            <div class="input-group mb-3">
                                              <input :type="type" class="form-control pass" v-model="newPassword" aria-label="" placeholder="New Password">
                                              <div class="input-group-append ">
                                                  <span class="input-group-text btn input-after" @click="showPassword2"> <i :class="name" aria-hidden="true"></i> </span>
                                              </div>
                                            </div>
                                            <div class="input-group">
                                              <input :type="type" class="form-control pass" v-model="confirmPassword" aria-label="" placeholder="Confirm Password">
                                              <div class="input-group-append ">
                                                  <span class="input-group-text btn input-after" @click="showPassword3"> <i :class="name" aria-hidden="true"></i> </span>
                                              </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="btn-danger modal-default-button" @click="changePassword">
                    Change
                  </button>
                  <!-- <button class="btn-danger modal-default-button" @click="$emit('close')">
                    Done
                  </button> -->
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
import axios from 'axios'
export default {
    name: 'modal',
    data(){
      return{
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        name: 'fa fa-eye',
        type: 'password'
      }
    },

    methods: {
      close() {
        this.$emit('close');
      },
       changePassword() {
        let payload = { old_password: this.oldPassword, password: this.newPassword, password_confirmation: this.confirmPassword };
        axios.post('https://api.fxhup.com/auth/change/password', payload)
                .then((res) => {
                  console.log(res.message)
                    this.$router.go();
                });
      },
      showPassword1() {
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
      showPassword2() {
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
      showPassword3() {
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
    },
}
</script>

<style scoped>
    .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 30%;
  margin: 0px auto;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 10px 0;
}

.modal-default-button {
  /* float: right; */
  width: 100%;
  border: none;
  /* border-radius: 0.3rem; */
  padding: 0.3rem 0;

}
input[type=password]{
    width: 100%;
    border: none;
    box-shadow: 0px 0px 1px #999;
    border-radius: 3px;
    padding: 2px 5px;
}
input[type=password]::placeholder {
    font-size: 0.5rem !important;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media only screen and (max-width: 320px){
    .modal-container{
        width: 80%;
    }
}

</style>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    