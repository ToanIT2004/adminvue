<template>
  <div class="container">
 <div class="text-black" >
  <h1 align="center"><b> Sản Phẩm </b> </h1>
  <div class="container">
    <div class="row">
        <div class="col-lg-3">
          <select v-model="tenloai" class="form-select">
            <option :value="item.tenloai" v-for="(item, index) in listTenLoai" :key="index">{{ item.tenloai.toUpperCase() }}</option>
          </select>
        </div>
    </div>
  </div>
  <table class="table table-hover table-bordered  border-dark table-responsive mt-2">
    <thead class="table-primary">
      <tr class="text-center">
        <!-- <th>Menu</th> -->
        <th>Màu</th>
        <th>GB</th>
        <th>Tên Sản Phẩm</th>
        <th>Mô tả</th>
        <th>Hình</th>
        <!-- <th>Hình 1</th>
        <th>Hình 2</th>
        <th>Hình 3</th> -->
        <th>Đơn giá</th>
        <th>Giảm giá</th>
        <th>Sl tồn</th>
        <th>EDIT</th>
      </tr>
    </thead>

    <tbody class="text-center">
        <tr v-for="(item, index) in displayProduct" :key="index">
          <!-- <td>{{ item.idmenu }}</td> -->
          <td>{{ item.idcolor }}</td>
          <td>{{ item.idGB }}GB</td>
          <td>{{ item.tensp }}</td>
          <td>{{ item.mota }}</td>
          <td>
            <img style="width: 100px; height: 100px;" :src="getImageUrl(item.img)" alt="">
          </td>
          <!-- <td>
            <img style="width: 100px; height: 100px;" :src="getImageUrl(item.img1)" alt="">
          </td>
          <td>
            <img style="width: 100px; height: 100px;" :src="getImageUrl(item.img2)" alt="">
          </td>
          <td>
            <img style="width: 100px; height: 100px;" :src="getImageUrl(item.img3)" alt="">
          </td> -->
          <!-- <td>
            <img :src="getImageUrl(item.img)" alt="">
          </td> -->
          <td>{{ item.dongia }}</td>
          <td>{{ item.giamgia }}</td>
          <td>{{ item.slton }}</td>
          <td>
            <button class="btn btn-primary">SỬA</button> <br>
            <button class="btn btn-danger mt-2">XÓA</button>
          </td>
        </tr>
    </tbody>
  </table>
 </div>
</div>
<header-vue/>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      issetLocalStoge: sessionStorage.getItem('idnv'),
      Products: [],
      listTenLoai: [],
      tenloai: null,
    }
  },

  computed:{
    displayProduct() {
      console.log(this.tenloai);
      if(this.tenloai !== null) {
        return this.Products.filter(product => product.idmenu == this.tenloai)
      }else {
        return 0;
      }
    }
   
  },

  created() {
    if(this.issetLocalStoge === null && this.issetLocalStoge < 1) {
      this.$router.push({ name: 'login' }); 
      alert('Bạn cần phải đăng nhập')
    }

    axios.get('http://127.0.0.1:8000/api/menu') 
      .then(res => {
        this.listTenLoai = res.data
        console.log(res.data)
        if (this.listTenLoai.length > 0) {
          this.tenloai = this.listTenLoai[0].tenloai; // Chọn giá trị đầu tiên của listTenLoai
          // console.log(this.tenloai)
        }
      })
      .catch(error => console.log(error))


    // Lấy tất cả product ra
    axios.get("http://127.0.0.1:8000/api/product")
      .then(res => {
        this.Products = res.data;
        // console.log(this.Products)
      })
      .catch(error => console.log(error))

  },

  methods: {
    // Chỗ này nó sẽ tự động chạy vào public
    getImageUrl(item) {
      return `http://127.0.0.1:8000${item}`; // Đường dẫn của Laravel đến hình ảnh
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