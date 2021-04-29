<template>
    <transition name="modal">
      
        <div class="modal-mask">
          <div class="modal-wrapper"  id="custom-target">
            <form action="" method="post" @submit.prevent="addResource">
            <div class="modal-container">

              <div class="modal-header d-flex align-items-center py-1">
                <slot name="header">
                  <h4 class="text-primary">Add New Resource</h4>
                  <button type="button" class="btn btnx btn-lg btn-danger btn-close" @click="close"> x </button>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                    <div class="row input-item">
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput1">Name</label>
                          <input v-model="formFields.title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="col-xl-4 col-md-6 col-sm-6 input-item">
                            <label for="">Status</label>
                            <select v-on:change="changedPrice()" id="mySelect" class="custom-select" v-model="formFields.status">
                              <option value="1">Free</option>
                              <option value="2">Paid</option>
                            </select>
                        </div>
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput2">Price</label>
                          <input :disabled="disabled" v-model="formFields.price" type="number" class="form-control" id="exampleFormControlInput2" placeholder=" $ ">
                        </div>
                    </div>
                    <div class="form-group mt-1">
                      <label for="exampleFormControlTextarea1">Description</label>
                      <textarea v-model="formFields.description" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label class="small-text" for="">Click to add Video</label>
                        <input type="file" name="" id="file" ref="file" v-on:change="handleFileUpload()">
                      </div>
                      <div class="col-md-6">
                        <label class="small-text" for="">Click to add Thumbnail</label>
                        <input type="file" name="" id="file2" ref="file2" v-on:change="handleFileUpload2()">
                      </div>
                    </div>

                </slot>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <!-- <button class="btn-primary modal-default-button" @click="addVideo">
                    Add 
                  </button> -->
                  <input type="submit"  class="btn btn-primary modal-default-button" value="Add">
                </slot>
              </div>
            </div>
            </form>
          </div>
        </div>
      </transition>
</template>

<script>

// import AuthService from '@/services/AuthService.js';
import Swal from 'sweetalert2';
import axios from 'axios';
// import image from '../../assets/img/small/img1.jpg';
export default {
    name: 'modal',
    data(){
      return{
        disabled: true,
        formFields: {
            file: null,
            title: null,
            author: null,
            status: "",
            status2: "",
            price: null,
            type: "video",
            description: null,
            thumbnail: null
          },
          alert: false
      }
    },

    methods: {
      changedPrice(){
      var priceOptions = document.getElementById("mySelect");
      var selOption = priceOptions.options[priceOptions.selectedIndex].value;
        if ( selOption == "1"){
          this.disabled = true;
     }
     else{
       this.disabled = false;
     }
      },
      close() {
        this.$emit('close');
      },
      handleFileUpload(){
      this.formFields.file = this.$refs.file.files[0];
      },
      handleFileUpload2(){
        if(this.formFields.thumbnail == ' '){
          let thumbNail = document.createElement("IMG");
          thumbNail.src = 'src/assets/img/icon.png';
          this.formFields.thumbnail = thumbNail;
        }
        else {
          this.formFields.thumbnail = this.$refs.file2.files[0];
        }
      },
     addResource() {
        let formData = new FormData();
        formData.append("file", this.formFields.file);
        formData.append("title", this.formFields.title);
        formData.append("status", this.formFields.status);
        formData.append("price", this.formFields.price);
        formData.append("type", this.formFields.type);
        formData.append("description", this.formFields.description);
        formData.append("cover_page", this.formFields.thumbnail);

        axios.post('https://api.fxhup.com/project/resource/create', formData)
                .then((response) => {
                    console.log(response);
                      this.alert = true;
                      this.formFields.file = '';
                      this.formFields.title = '';
                      this.formFields.description = '';
                      this.formFields.status = '';
                      this.formFields.price = '';
                      this.formFields.type = '';
                      this.formFields.description = '';
                      this.formFields.thumbnail = '';
                 Swal.fire({
                                text: 'Resource Added Successfully',
                                icon: 'success',
                                target: '#custom-target',
                                customClass: {
                                  container: 'position-absolute'
                                },
                                toast: true,
                                position: 'center-top'
                              })
                      this.$router.go();
                })
                .catch((error) => {
                    console.log(error);
                    Swal.fire({
                                text: 'Something went wrong!',
                                icon: 'error',
                                target: '#custom-target',
                                customClass: {
                                  container: 'position-absolute'
                                },
                                toast: true,
                                position: 'center-top'
                              });
        });
        
        // this.$emit('close');
      }
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
  padding: 15px 20px;
  background-color: #fff;
  /* border-radius: 10px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-header{
  padding: 0 !important;
  align-content: center;
}

.modal-default-button {
  /* float: right; */
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 0;

}
input[type=text], select{
    width: 100%;
    height: 1.8rem;
    padding: 5px 5px !important;
}
input[type=file]{
    /* background: #fff; */
    font-size: 0.6rem;
}
textarea {
    width: 100%;
}
label{
  font-size: 0.7rem;
}
.btnx {
    border-radius: 50%;
    font-size: 1rem;
    font-weight: bold;
}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap');

*{
  font-family: 'DM Sans', sans-serif !important;
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

@media screen and (max-width: 425px){
    .modal-container{
        width: 80% !important;
    }
}
</style>