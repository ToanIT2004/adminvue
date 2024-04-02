
<template>
   <div class="container">
      <div class="row mt-3">
         <div class="col-lg-4">
            <form @submit.prevent="AddTenLoai()">
               <div class="mb-3">
                  <label class="form-label">Tên loại: </label>
                  <input type="text" v-model="tenloai" class="form-control">
                  <button type="submit" class="btn btn-primary mt-2">Thêm</button>
               </div>
            </form>
            <table class="table table-danger">
               <thead>
                  <tr class="text-center">
                     <th scope="col">ID</th>
                     <th scope="col">TÊN LOẠI</th>
                     <th scope="col">XÓA</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="text-center" v-for="(item, index) in listTenLoai" :key="index">
                     <td>{{ index+1 }}</td>
                     <td>{{ item.tenloai.toUpperCase() }}</td>
                     <td><div @click="DeleteTenLoai(item.id)" class="btn btn-danger">XÓA</div></td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div class="col-lg-4">
            <form action="" @submit.prevent="AddColor()">
               <div class="mb-3">
                  <label class="form-label">Màu sắc: </label>
                  <input type="text" v-model="mausac" class="form-control">
                  <button type="submit" class="btn btn-primary mt-2">Thêm</button>
               </div>
            </form>
            <table class="table table-info">
               <thead>
                  <tr class="text-center">
                     <th scope="col">ID</th>
                     <th scope="col">TÊN LOẠI</th>
                     <th scope="col">XÓA</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="text-center" v-for="(item, index) in listMauSac" :key="index">
                     <td>{{ index+1 }}</td>
                     <td>{{ item.mausac.toUpperCase() }}</td>
                     <td><div @click="DeleteColor(item.id)" class="btn btn-danger">XÓA</div></td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div class="col-lg-4">
            <form @submit.prevent="AddGB()">
               <div class="mb-3">
                  <label class="form-label">Dung lượng: </label>
                  <input type="text" v-model="GB" class="form-control">
                  <button type="submit" class="btn btn-primary mt-2">Thêm</button>
               </div>
            </form>
            <table class="table table-primary">
               <thead>
                  <tr class="text-center">
                     <th scope="col">ID</th>
                     <th scope="col">TÊN LOẠI</th>
                     <th scope="col">XÓA</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="text-center" v-for="(item, index) in listGB" :key="index">
                     <td>{{ index+1 }}</td>
                     <td>{{ item.GB }}GB</td>
                     <td><div @click="DeleteGB(item.id)" class="btn btn-danger">XÓA</div></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

   export default {
      name: 'HelloWorld',

      data() {
         return {
            tenloai: "",
            mausac: "",
            GB: "", 
            listTenLoai: [],
            listMauSac: [],
            listGB: [],
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

      

      methods: {
         deleteAPI(url, id) {
            axios.delete(`${url}/${id}`)
               .then(res => {
                  if(res.status == 201) {
                     window.location.reload();
                     alert('Xóa thành công')
                  }
               })
               .catch(error => console.log(error))
         },
         postAPI(url,data) {
            axios.post(url, data) 
               .then(res => {
                  if(res.status == 201) {
                     alert('Thêm thành công')
                     window.location.reload();
                  }
               }) 
               .catch(error => {
                  if(error.response.data.tenloai) {
                     alert(error.response.data.tenloai);
                  }else if(error.response.data.mausac) {
                     alert(error.response.data.mausac);
                  }else if(error.response.data.GB) {
                     alert(error.response.data.GB);
                  }else {
                     console.log(error);
                  }
               })
         },

         AddTenLoai() {
            const data = {
               tenloai: this.tenloai,
            }
            this.postAPI('http://127.0.0.1:8000/api/menu', data);
            console.log("1");
         },
         DeleteTenLoai(id) {
            this.deleteAPI('http://127.0.0.1:8000/api/menu', id)
         },

         AddColor() {
            const data = {
               mausac: this.mausac,
            }
            this.postAPI('http://127.0.0.1:8000/api/color',data);
         },
         DeleteColor(id) {
            this.deleteAPI('http://127.0.0.1:8000/api/color', id)
         },

         AddGB() {
            const data = {
               GB: this.GB,
            }
            this.postAPI('http://127.0.0.1:8000/api/dungluong',data);
         },
         DeleteGB(id) {
            this.deleteAPI('http://127.0.0.1:8000/api/dungluong', id)
         },
      },
   }
</script>