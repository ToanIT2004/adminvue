<template>
   <div class="container">
  <div class="text-black" >
   <h1 class="text-center"><b> Thông Tin Khách Hàng</b> </h1>
   <input
        type="text"
        @input="handleInput"
        v-model="search"
        class="form-control"
        placeholder="Tìm kiếm bằng gmail"
    />
   <!-- <button class="btn btn-success">KHÔI PHỤC</button> -->
   <table class="table table-hover table-primary table-bordered  border-dark table-responsive mt-2">
     <thead>
       <tr class="text-center">
         <th>STT</th>
         <th>HỌ VÀ TÊN</th>
         <!-- <th>MẬT KHẨU</th> -->
         <th>EMAIL</th>
         <th colspan="2">CHỈNH SỬA</th>
       </tr>
     </thead>
     <tbody>
       <tr class="text-center" v-for="(info, index) in userDisplay" :key="index">
         <td>{{ index+1 }}</td>
         <td>{{ info.lastname + ' ' +info.firstname }}</td>
         <!-- <td>{{ info.password }}</td> -->
         <td>{{ info.email }}</td>
         <td class="text-center">
           <button @click="updateEmploy(info.id)" type="button" class="btn btn-warning">Sửa</button>&nbsp;
           <button @click="dropEmploy(info.id)" type="button" class="btn btn-danger">Thùng rác</button>
         </td>
       </tr>
     </tbody>
   </table>
  </div>
 </div>
 </template>
 
 <script>
import axios from 'axios'

 export default {
   name: 'HelloWorld',
   data() {
     return {
        is_admin: sessionStorage.getItem('is_admin'),
        infoUser: [],
        path: this.$route.path,
        search: ""
     }
   },

   

   created() {
     // Xử lý khi tài khoản là admin (2) thì mới cho vào
    //  if(this.is_admin != 2) {
    //    this.$router.push({name: 'home'})
    //    alert('Bạn không có quyền truy cập vào mục này')
    //  }

     //Lấy tất cả tài khoản khách hàng
     axios.get('http://127.0.0.1:8000/api/getUser')
       .then(res => {
         this.infoUser = res.data;
         console.log(this.infoUser);
       });
   },

   computed:{
    userDisplay() {
      if(this.search.trim().length > 0) {
          return this.infoUser.filter(user => user.email.includes(this.search.trim()))
      }else {
        return this.infoUser
      }
    }
   },
   methods: {
     // Xử lí xóa nhân viên 
     dropEmploy(id) {
       axios.delete(`http://127.0.0.1:8000/api/user/${id}`)
       .then(res => {
         if(res.status === 201) {
           alert('Xóa khách hàng thành công');
           window.location.reload();
         }
       })
       .catch(error => {
         console.error('Lỗi khi xóa khách hàng:', error)
       })
       ;
     },

     // Xử lý sửa nhân viên
     updateEmploy(id) {
       this.$router.push(`/suakh/${id}`)
     }
   },
 }
 </script>
 <style>
 .table-responsive {
   width: 100%;
   overflow-x: auto;
 }
 </style>