<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  <h3>E-Book Name</h3>
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
                                            <img class="img-books" src="@/assets/img/users/avatar-4.jpg" alt="Book thumbnail">
                                            <p class="mb-1 mt-1">Description</p>
                                            <p class="mb-1 mt-1">Status</p>
                                            <p class="text-muted mt-2 mb-2"><span class="text-danger mr-1">&#8358; 5,000</span> 
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="btn-danger modal-default-button" @click="$emit('close')">
                    Go back
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
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
  width: 40%;
  margin: 0px auto;
  padding: 20px 30px;
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
  border-radius: 0.3rem;
  padding: 0.3rem 0;

}
input[type=text]{
    width: 100%;
}
input[type=file]{
    background: #fff;
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
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    