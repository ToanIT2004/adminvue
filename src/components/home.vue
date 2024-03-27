<template>
   <!-- <footer-vue/>
  <div class="d-flex nen">
    <header-vue/> -->
  <div class="container">
 <div class="text-black" >
  <h1 align="center"><b> Sản Phẩm </b> </h1>
 <button class="btn btn-success"> <router-link class="nav-link  " :to="{ name: 'them' }">Thêm Sản Phẩm</router-link></button>
  <table class="table table-hover table-primary table-bordered  border-dark table-responsive mt-2">
    <tr>
      <th> id</th>
      <th>Tên Sản Phẩm</th>
      <th> Hỉnh Ảnh</th>
      <th> Giá </th>
      <th> bảo hánh</th>
      <th> Chính Sách</th>
      <th> Mô Tả</th>
      <th> chi tiết</th>
      <th></th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td class="text-center">
        <button type="button" class="btn btn-warning">Sữa</button>&nbsp;
        <button type="button" class="btn btn-danger">Xóa</button>
      </td>
    </tr>
  </table>
 </div>
</div>
<header-vue/>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      // issetLocalStoge: localStorage.getItem('idnv')
    }
  },

  // created() {
  //   if(this.issetLocalStoge === null && this.issetLocalStoge < 1) {
  //     this.$router.push({ name: 'login' }); 
  //     alert('Bạn cần phải đăng nhập')
  //   }
  // },
}
</script>
<style>
.table-responsive {
  width: 100%;
  overflow-x: auto;
}
</style>