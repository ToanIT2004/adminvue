<template>
   <div class="container">
      <h1 v-if="path == '/themnv'">Thêm Nhân Viên</h1>
      <h1 v-else-if="path === `/suanv/${this.$route.params.id}`">Sửa Nhân Viên</h1>
      <h1 v-else-if="path === `/suakh/${this.$route.params.id}`">Sửa Nhân Viên</h1>
      <form @submit.prevent="handleSubmit()">
         <div class="form-group mb-3">
            <label for="">Họ</label>
            <input type="text" :disabled="path != '/themnv'" v-model="lastname" class="form-control"/>
            <span v-if="errors.lastname" class="text-danger">{{errors.lastname[0]}}</span>
         </div>

         <div class="form-group mb-3">
            <label for="">Tên</label>
            <input :disabled="path != '/themnv'" type="text" v-model="firstname" class="form-control"/>
            <span v-if="errors.firstname" class="text-danger">{{errors.firstname[0]}}</span>
         </div>

         <div class="form-group mb-3">
            <label for="">Email</label>
            <input type="text" :disabled="path != '/themnv'" v-model="email" class="form-control"/>
            <span v-if="errors.email"  class="text-danger">{{errors.email[0]}}</span>
            <!-- <span v-if="errors.email" class="text-danger">{{errors.email[0]}}</span> -->
         </div>

         <div class="form-group mb-1">
            <label for="">Mật khẩu</label>
            <input type="text" v-model="password" class="form-control"/>
            <span v-if="errors.password" class="text-danger">{{errors.password[0]}}</span>
         </div>
         <button v-if="path == '/themnv'" type="submit" class="btn btn-success mt-3 mb-5">Thêm Khách Hàng</button>
         <button v-else type="submit" class="btn btn-success mt-3 mb-5">Sửa nhân viên</button>
      </form>
   </div>
</template>
    <script>
import axios from 'axios'

    export default {
        name: 'HelloWorld',
      data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            is_admin: sessionStorage.getItem('is_admin'),
            errors: [],
            path: this.$route.path,
            infoUser: {},
        }
       },

      created() {
         // Xử lý khi tài khoản là admin (2) thì mới cho vào
         if(this.is_admin != 2) {
            this.$router.push({name: 'home'})
            alert('Bạn không có quyền truy cập vào mục này')
         }

         // Lấy nhân viên theo id
         if(this.path) {
            axios.get(`http://127.0.0.1:8000/api/user/${this.$route.params.id}`)
               .then(res => {
                  this.infoUser = res.data;

                  // Gán thông tin vào
                  this.lastname = this.infoUser.lastname
                  this.firstname = this.infoUser.firstname
                  this.email = this.infoUser.email
                  this.password = this.infoUser.password
               })
               .catch(error => console.log(error))
         }  
      },

      methods: {
        
         addEmploy() {
            const data = {
               firstname: this.firstname,
               lastname: this.lastname,
               email: this.email,
               password: this.password
            }
            
            // Xử lí thêm nhân viên
            axios.post('http://127.0.0.1:8000/api/addEmploy', data)
               .then(res => {
                  console.log(res)
                  alert('Thêm nhân viên thành công')
                  this.$router.push({name: "nhanvien"})
                  window.location.onload();
               })
               .catch(error => {
                  if(error.response) {
                     this.errors = error.response.data.errors
                  }else {
                     console.log(error);
                  }
            }) 
         },

         updateEmploy() {
            // Xử lí sửa nhân viên 
            const data = {
               lastname: this.lastname,
               firstname: this.firstname, 
               email: this.email, 
               password: this.password
            }
            axios.put(`http://127.0.0.1:8000/api/user/${this.$route.params.id}`, data) 
               .then(res => {
                  if(res) {
                     if(this.path == `/suanv/${this.$route.params.id}`) {
                        alert('Sửa nhân viên thành công')
                        this.$router.push('/nhanvien')
                     }else {
                        alert('Sửa khách hàng thành công')
                        this.$router.push('/khachhang')
                     }
                     window.location.load()
                  }
               })
               .catch(error => console.log(error))
         },
         handleSubmit() {
            if(this.path === '/themnv') {
               this.addEmploy();
            }else {
               this.updateEmploy();
            }
         },
      },
    }
    </script>
    <style>
    
    </style>
    