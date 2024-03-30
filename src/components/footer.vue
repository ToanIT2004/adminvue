<template>
  <div class="col-2 card  text-white">
      <div align="center" class="mt-3"><h3><b>Danh Mục</b></h3></div>
      <div align="center">
        <div class="dropdowns " > <router-link class="nav-link  " :to="{ name: 'home' }">
          <button @mousedown="toggleDropdowns" class="dropbtn buttonc mt-4">
          Sản Phẩm <i class="bi bi-caret-down-fill"></i>
       </button>
       </router-link>
           <div :class="{ 'dropdowns-content mt-3': true, 'show': dropdownOpens }" @mousedown="closeDropdowns">
               <router-link class="nav-link buttonc mt-3" :to="{ name: 'nhanvien' }"> Iphone</router-link>
         <router-link class="nav-link buttonc  mt-3 " :to="{ name: '' }">  Ipad </router-link>
         <router-link class="nav-link buttonc  mt-3 " :to="{ name: '' }">  Macbook </router-link>
         <router-link class="nav-link buttonc  mt-3 " :to="{ name: '' }">  Appwatch </router-link>
         <div>.</div>
           </div >
           </div>
   
      <!-- v-if="is_admin > 1" Nó nằm trong nhóm nhân viên khách hàng khôi phục -->
  
      <router-link class="nav-link" :to="{ name: 'khoiphuc' }">
          <div class="buttonc mt-3"> Khôi phục khách hàng</div>
      </router-link>
      <div class="dropdowns " >
        <button @mousedown="toggleDropdown" class="dropbtn buttonc mt-3"> Tài khoản <i class="bi bi-caret-down-fill"></i></button>
        <div :class="{ 'dropdowns-content mt-3': true, 'show': dropdownOpen }" @mousedown="closeDropdown">
            <router-link class="nav-link buttonc mt-3" :to="{ name: 'nhanvien' }">   Nhân viên</router-link>
      <router-link class="nav-link buttonc  mt-3 " :to="{ name: 'khachhang' }">   Khách hàng </router-link>
      <div>.</div>
        </div>
        </div>
        <div class="dropdowns " >
          <button @mousedown="toggleDropdowna" class="dropbtn buttonc mt-3 "> Doanh Thu <i class="bi bi-caret-down-fill"></i></button>
          <div :class="{ 'dropdowns-content mt-3 ': true, 'show': dropdownOpena }" @mousedown="closeDropdowna">
              <router-link class="nav-link buttonc mt-3" :to="{ name: '' }">   Báo Cáo</router-link>
        <router-link class="nav-link buttonc  mt-3  " :to="{ name: '' }">   Thống Kê </router-link>
        <router-link class="nav-link buttonc  mt-3  " :to="{ name: '' }">   Tồn Hàng </router-link>
        <div>.</div>
          </div>
          </div>
      <div class="buttonc mt-3 mb-5">Đánh Giá</div>
     
        </div>
        
      </div>
     
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      is_admin: sessionStorage.getItem('is_admin'),
      dropdownOpen: false,
      dropdownOpens: false,
      dropdownOpena: false

    }
  },

  methods: {
    exitUser() {
      sessionStorage.clear();
      alert('Đăng xuất thành công');
      this.$router.push({name: 'login'});
      window.location.reload();
    },

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    toggleDropdowns() {
      this.dropdownOpens = !this.dropdownOpens;
    },
    closeDropdowns() {
      this.dropdownOpens = false;
    },
    toggleDropdowna() {
      this.dropdownOpena = !this.dropdownOpena;
    },
    closeDropdowna() {
      this.dropdownOpena = false;
    },
  },
}
</script>
<style>


.buttonc {

    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #a09d9d;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    width: 90%;
    border-radius:10px;
}

.buttonc:hover {
    background-color: rgb(123, 136, 209);
    box-shadow: 0px 15px 20px rgb(75, 93, 196);
    color: #fff;
    transform: translateY(-7px);
}

.buttonc:active {
    transform: translateY(-1px);
}

.dropdowns {
    position: relative;
    display: inline-block;
    width: 100%;
}

.dropdowns-content {
    display: none;

    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    background-color: #adadad;
    left: auto;
    border-radius:10px;
    width: 70%;
}

.dropdowns-content a { 
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius:10px;
  
}

.dropdowns-content a:hover {
  background-color: rgb(123, 136, 209);
  box-shadow: 0px 15px 20px rgb(75, 93, 196);
  color: #fff;
  transform: translateY(-7px);
}

.dropdowns-content.show {
    display: block;
}
.card {
  width: auto;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background: linear-gradient(293deg,rgb(96, 229, 255) 30%,  rgb(153, 153, 253) 70%);
 }

</style>
