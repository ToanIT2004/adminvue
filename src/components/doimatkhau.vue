<template>
   <div class="container">
      <div class="row">
         <div class="col-lg-12">
            <form action="" @submit.prevent="changePassword()">
               <div class="form-group">
                  <label for="">Nhập mật khẩu cũ</label>
                  <input type="password" v-model="oldpass" class="form-control">
                  <span v-if="errors.value && errors.value.error" class="text-danger">{{errors.value.error}}</span>
               </div>

               <div class="form-group">
                  <label for="">Nhập mật khẩu mới</label>
                  <input type="password" v-model="newpass" class="form-control">
                  <span v-if="errors.value && errors.value.newpass" class="text-danger">{{errors.value.newpass[0]}}</span>
               </div>

               <div class="form-group">
                  <label for="">Xác nhận mật khẩu</label>
                  <input type="password" v-model="newpass_confirmation" class="form-control">
                  <!-- <span v-if="errors.value && errors.value.email" class="text-danger">{{errors.value.email[0]}}</span> -->
                  <span v-if="errors.value && errors.value.newpass" class="text-danger">{{errors.value.newpass[0]}}</span>
               </div>
               
               <button type="submit" :disabled="oldpass.length === 0" class="btn btn-primary mt-2">Thay đổi</button>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

   export default {
      name: 'HelloWorld',
      data() {
         return {
            is_email: sessionStorage.getItem('is_email'),
            oldpass: '',
            newpass: '',
            newpass_confirmation: '',
            errors: ref([]),
      
         }
      },

      methods: {
         changePassword() {
            const data = {
               email: this.is_email,
               password: this.oldpass,
               newpass: this.newpass,
               newpass_confirmation: this.newpass_confirmation // Thêm trường newpass_confirmation
            }
            axios.post('http://127.0.0.1:8000/api/changePass', data)
               .then(res => {
                  if(res.status == 200) {
                     this.$router.push('/home')
                     alert('Đổi mật khẩu thành công');
                  }
               })
               .catch(error => {
                  if(error.response) {
                     console.log(error.response.data)
                     this.errors.value = error.response.data
                  }else {
                     console.error('Error:', error.message);
                  }
               })
         }
      },
   }
</script>