<template>
    <div class="col-2 bg-dark text-white">
        <div align="center " class=""><b>Danh Mục</b></div>
        <router-link class="nav-link" :to="{ name: 'home' }">  <div class="buttonc mt-4"> Sản Phẩm</div> </router-link>
        <router-link v-if="is_admin > 1" class="nav-link" :to="{ name: 'nhanvien' }">  <div class="buttonc mt-3"> Nhân viên</div> </router-link>
        <router-link v-if="is_admin > 1" class="nav-link" :to="{ name: 'khachhang' }">  <div class="buttonc mt-3"> Khách hàng</div> </router-link>
        <router-link v-if="is_admin > 1" class="nav-link" :to="{ name: 'khoiphuc' }"><div class="buttonc mt-3"> Khôi phục khách hàng</div></router-link>
        <div class="buttonc mt-3">Doanh Thu</div>
        <div class="buttonc mt-3">Đánh Giá</div>
        <router-link class="nav-link" :to="{ name: 'doimatkhau' }"><div class="buttonc mt-3">Đổi mật khẩu</div></router-link>
        <div @click="exitUser()" class="buttonc bg-warning mt-3">Đăng xuất</div>
      </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      is_admin: sessionStorage.getItem('is_admin'),
    }
  },

  methods: {
    exitUser() {
      sessionStorage.clear();
      alert('Đăng xuất thành công');
      this.$router.push({name: 'login'});
      window.location.reload();
    }
  },
}
</script>
<style>

.bg-dark{
    height: 540px;
  }
  .buttonc {
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #adadad;
    border: none;
  
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }
  
  .buttonc:hover {
    background-color: #609d84;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  
  .buttonc:active {
    transform: translateY(-1px);
  }
  
  </style>