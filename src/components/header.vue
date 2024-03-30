<template>
  <div class="bgcolor">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <router-link class="nav-link " :to="{ name: 'trangchu' }">
          <button class="buttona" data-text="Awesome">
            <span class="actual-text">&nbsp; <i class="bi bi-apple"></i>APPLE  &nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;<i class="bi bi-apple"></i>APPLE&nbsp;</span>
          </button>
        </router-link>
        </div>
        <div class="col-6">
          <div class="dropdown enten" style="float: right;">
            <button @mousedown="toggleDropdown" class="dropbtn btn btn-warning"> <i class="bi bi-person-circle fs-5"></i> <i class="bi bi-caret-down-fill"></i></button>
            <div :class="{ 'dropdown-content mt-3': true, 'show': dropdownOpen }" >
              <a class="dropdown-link" href="#">Thông Tin</a>
             <router-link class="nav-link dropdown-link" :to="{ name: 'doimatkhau' }">Đổi mật khẩu</router-link>
              <a class="dropdown-link" href="#">   <div @click="exitUser()" >Đăng xuất</div></a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    }
  }
}
</script>

<style>
.bgcolor {
  background-color: rgb(153, 153, 253) ;
    height: 100px;
}

.buttona {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
}

/* button styling */
.buttona {
    top: 20px;
    --border-right: 6px;
    --text-stroke-color: rgba(0, 0, 0, 0.6);
    --animation-color: rgb(96, 229, 255);
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
}

/* this is the text, when you hover on button */
.hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
}

/* hover */
.buttona:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
}


.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    background-color: #ededed;
    left: auto;
}

.dropdown-content a { 
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #ffc107;
}

.dropdown-content.show {
    display: block;
}

.enten {
    right: 100px;
    top: 30px;
}
</style>
