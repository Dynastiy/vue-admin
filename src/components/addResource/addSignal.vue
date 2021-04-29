<template>
    <transition name="modal">
      
        <div class="modal-mask">
          <div class="modal-wrapper"  id="custom-target">
            <form action="" method="post" @submit.prevent="addSignal">
            <div class="modal-container">

              <div class="modal-header d-flex align-items-center py-1">
                <slot name="header">
                  <h4 class="text-primary">Add Signal</h4>
                  <button type="button" class="btn btnx btn-lg btn-danger btn-close" @click="close"> x </button>
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                    <div class="row input-item">
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput1">SYMBOL</label>
                          <input v-model="formFields.symbol" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput1">Last</label>
                          <input v-model="formFields.last" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput2">CHG</label>
                          <input v-model="formFields.chg" type="text" class="form-control" id="exampleFormControlInput2" placeholder="">
                        </div>
                    </div>
                    <div class="row input-item">
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput1">CHG%</label>
                          <input v-model="formFields.chg_per" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput1">HIGH</label>
                          <input v-model="formFields.high" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="form-group col-xl-4 col-md-6 col-sm-6 input-item">
                          <label for="exampleFormControlInput2">LOW</label>
                          <input v-model="formFields.low" type="text" class="form-control" id="exampleFormControlInput2" placeholder="">
                        </div>
                    </div>
                    <div class="text-centre">
                        <div class="input-item">
                        <label for="">Select Plan</label>
                        <select class="custom-select" @change="plans($event)" >
                            <option v-for="(plan, index) in plan_types" :key ="index" :value="plan.id"> {{ plan.name }} </option>
                        </select>
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

import Swal from 'sweetalert2';
import axios from 'axios';





























export default {
    name: 'modal',
    data(){
      return{
        disabled: true,
        formFields: {
            symbol: null,
            chg: null,
            last: null,
            chg_per: null,
            high: null,
            low: null,
            result: "pending",
          },
          alert: false,
          plan_type: '',
          plan_types: []
      }
    },

    methods: {
      close() {
        this.$emit('close');
      },
      plans(event){
        let value = event.target.value;
        this.plan_type = value;
        console.log(value)
      },
     addSignal() {
        let formData = new FormData();
        formData.append("symbol", this.formFields.symbol);
        formData.append("chg", this.formFields.chg);
        formData.append("last", this.formFields.last);
        formData.append("chg_per", this.formFields.chg_per);
        formData.append("high", this.formFields.high);
        formData.append("low", this.formFields.low);
        formData.append("result", this.formFields.result);
        formData.append("plan_id", this.plan_type);

        axios.post('https://api.fxhup.com/project/signals', formData)
                .then((response) => {
                    console.log(response);
                 Swal.fire({
                                text: 'Signal Added',
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
      },
      addPlan(){
        axios.get('https://api.fxhup.com/project/plans')
        .then((response) => {
          this.plan_types = response.data.data.plans;
          // console.log(response.data.data.plans[2].display_name)
        })
      }
    },
    mounted(){
      this.addPlan()
    }
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