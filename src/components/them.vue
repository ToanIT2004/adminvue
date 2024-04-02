<template>
   <div style="height: 1100px; min-height: 1280px;" class="container offset-md-1">
      <div class="row">
         <div class="col-lg-11">
            <form @submit.prevent="AddPro()" enctype="multipart/form-data">
               <h1 class="text-center mb-3">Thêm sản phẩm</h1>
               <div class="form-group mb-3">
                  <label for="">Tên sản phẩm</label>
                  <input type="text" v-model="tensp" class="form-control">
                  <span class="text-danger" v-if="errors.tensp">{{ errors.tensp[0]}}</span>
               </div>
               
               <div class="d-flex mb-3">
                  <div style="width: 300px;" class="mx-1">
                     <label for="">Tên Loại</label>
                     <select v-model="idmenu" class="form-select" aria-label="Default select example">
                        <option v-for="(item, index) in listTenLoai" :key="index" :value="item.id">{{ item.tenloai.toUpperCase() }}</option>
                     </select>
                     <span class="text-danger" v-if="errors.idmenu">{{ errors.idmenu[0]}}</span>
                  </div>
                  <div style="width: 300px;" class="mx-1">
                     <label for="">Màu sắc</label>
                     <select v-model="idcolor" class="form-select" aria-label="Default select example">
                        <option v-for="(item, index) in listMauSac" :key="index" :value="item.id">{{ item.mausac.toUpperCase() }}</option>
                     </select>
                     <span class="text-danger" v-if="errors.idcolor">{{ errors.idcolor[0]}}</span>
                  </div>
                  
                  <div style="width: 300px;" class="mx-1">
                     <label for="">Dung lượng</label>
                     <select v-model="idGB" class="form-select" aria-label="Default select example">
                        <option v-for="(item, index) in listGB" :key="index" :value="item.id">{{ item.GB }}GB</option>
                     </select>
                     <span class="text-danger" v-if="errors.idGB">{{ errors.idGB[0]}}</span>

                  </div>
               </div>

               <div class="form-group mb-3">
                  <label for="">Mô tả: </label>
                  <textarea v-model="mota" class="form-control" name="" id="" cols="30" rows="7"></textarea>
                  <span class="text-danger" v-if="errors.mota">{{ errors.mota[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Hình ảnh</label>
                  <input type="file" @change="handleFileUpload($event, 'img')" class="form-control">
                  <span class="text-danger" v-if="errors.img">{{ errors.img[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Hình ảnh phụ 1</label>
                  <input type="file" @change="handleFileUpload($event, 'img1')" class="form-control">
                  <span class="text-danger" v-if="errors.img1">{{ errors.img1[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Hình ảnh phụ 2</label>
                  <input type="file" @change="handleFileUpload($event, 'img2')" class="form-control">
                  <span class="text-danger" v-if="errors.img2">{{ errors.img2[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Hình ảnh phụ 3</label>
                  <input type="file" @change="handleFileUpload($event, 'img3')" class="form-control">
                  <span class="text-danger" v-if="errors.img3">{{ errors.img3[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Đơn giá: </label>
                  <input v-model="dongia" type="text" class="form-control">
                  <span class="text-danger" v-if="errors.dongia">{{ errors.dongia[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Giảm giá: </label>
                  <input v-model="giamgia" type="text" class="form-control">
                  <span class="text-danger" v-if="errors.giamgia">{{ errors.giamgia[0]}}</span>
               </div>

               <div class="form-group mb-3">
                  <label for="">Số lượng tồn: </label>
                  <input v-model="slton" type="text" class="form-control">
                  <span class="text-danger" v-if="errors.slton">{{ errors.slton[0]}}</span>
               </div>

               <button class="btn btn-primary w-100">THÊM</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue';

export default {
    name: 'HelloWorld',
   data() {
      return {
         listTenLoai: [],
         listMauSac: [],
         listGB: [],
         idmenu: '',
         idcolor: '', 
         idGB: '',
         tensp: '', 
         mota: '', 
         img: null,
         img1: null,
         img2: null,
         img3: null,
         dongia: "",
         giamgia: "", 
         slton: "",
         errors: ref([])
      }
   },
   methods: {
      AddPro() {
         // Vì có file nên phải dùng FormData gửi dữ liệu lên
         const formData = new FormData();
         formData.append('idmenu', this.idmenu);
         formData.append('idcolor', this.idcolor);
         formData.append('idGB', this.idGB);
         formData.append('tensp', this.tensp);
         formData.append('mota', this.mota);
         formData.append('img', this.img);
         formData.append('img1', this.img1);
         formData.append('img2', this.img2);
         formData.append('img3', this.img3);
         formData.append('dongia', this.dongia);
         formData.append('giamgia', this.giamgia);
         formData.append('slton', this.slton);
         console.log(formData.get('tensp'))
         console.log(formData.get('slton'))

         axios.post('http://127.0.0.1:8000/api/product', formData)
            .then(res => console.log(res))
            .catch(error => {
               if(error.response) {
                  this.errors = error.response.data.errors
                  console.log(error.response.data.errors);
               }else {
                  console.log(error);
               }
            })
      },

      // Xem lại chỗ này
      handleFileUpload(event, propertyName) {
         this[propertyName] = event.target.files[0];
      }
   },

   mounted() {
      // Thiết lập giá trị mặc định cho idmenu tại đây
      if (this.listTenLoai.length > 0) {
         this.idmenu = this.listTenLoai[0].id; // Chọn phần tử thứ hai từ listTenLoai làm giá trị mặc định
      }
   },
   created() {
      // Lấy tất cả dữ liệu load ra
      axios.get('http://127.0.0.1:8000/api/menu') 
         .then(res => {
            this.listTenLoai = res.data
         })
         .catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/color') 
         .then(res => {
            this.listMauSac = res.data
         })
         .catch(error => console.log(error))

      axios.get('http://127.0.0.1:8000/api/dungluong') 
         .then(res => {
            this.listGB = res.data
         })
         .catch(error => console.log(error))
      },
}
</script>
<style>

</style>
