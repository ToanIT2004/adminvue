<template>
  <div class="container">
    <div class="text-black">
      <h1 class="text-center"><b> Thông Tin Nhân Viên </b></h1>
      <button class="btn btn-success">
        <router-link class="nav-link" :to="{ name: 'themnv' }"
          >THÊM NHÂN VIÊN</router-link
        >
      </button>
      <table
        class="table table-hover table-primary table-bordered border-dark table-responsive mt-2"
      >
        <thead>
          <tr class="text-center">
            <th>ID</th>
            <th>HỌ VÀ TÊN</th>
            <!-- <th>MẬT KHẨU</th> -->
            <th>EMAIL</th>
            <th colspan="2">CHỈNH SỬA</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center"
            v-for="(info, index) in infoEmploy"
            :key="index"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ info.lastname + " " + info.firstname }}</td>
            <!-- <td>{{ info.password }}</td> -->
            <td>{{ info.email }}</td>
            <td class="text-center">
              <button
                @click="updateEmploy(info.id)"
                type="button"
                class="btn btn-warning"
              >
                Sửa</button
              >&nbsp;
              <button
                @click="dropEmploy(info.id)"
                type="button"
                class="btn btn-danger"
              >
                Thùng rác
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      is_admin: sessionStorage.getItem("is_admin"),
      infoEmploy: [],
      path: this.$route.path,
      search: "",
    };
  },

  created() {
    //Lấy tất cả tài khoản nhân viên
       axios.get('http://127.0.0.1:8000/api/getEmploy')
      .then(res => {
        this.infoEmploy = res.data;
        console.log(this.infoEmploy);
      })
      .catch(error => console.log(error))


    // Xử lý khi tài khoản không phải là admin (is_admin != 2)
    if (this.is_admin != 2) {
      this.$router.push({ name: "home" });
      alert("Bạn không có quyền truy cập vào mục này");
    }
  },

  methods: {

    // Xử lí xóa nhân viên
    dropEmploy(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/user/${id}`)
        .then((res) => {
          if (res.status === 201) {
            alert("Xóa nhân viên thành công");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Lỗi khi xóa nhân viên:", error);
        });
    },

    // Xử lý sửa nhân viên
    updateEmploy(id) {
      this.$router.push(`/suanv/${id}`);
    },
  },
};
</script>
<style>
.table-responsive {
  width: 100%;
  overflow-x: auto;
}
</style>
