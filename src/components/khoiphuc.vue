<template>
  <div class="container">
    <div class="text-black">
      <h1 class="text-center"><b> Khôi Phục Thông Tin </b></h1>
      <!-- <button class="btn btn-success">KHÔI PHỤC</button> -->
      <table
        class="table table-hover table-primary table-bordered border-dark table-responsive mt-2"
      >
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
          <tr class="text-center" v-for="(info, index) in info" :key="index">
            <td>{{ info.id }}</td>
            <td>{{ info.lastname + " " + info.firstname }}</td>
            <!-- <td>{{ info.password }}</td> -->
            <td>{{ info.email }}</td>
            <td class="text-center">
              <button
                @click="restore(info.id)"
                type="button"
                class="btn btn-warning"
              >
                KHÔI PHỤC</button
              >&nbsp;
              <button
                @click="deleted(info.id)"
                type="button"
                class="btn btn-danger"
              >
                XÓA
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
      info: [],
      // path: this.$route.path
    };
  },

  created() {
    //Xử lý khi tài khoản là admin (2) thì mới cho vào
    if (this.is_admin != 2) {
      this.$router.push({ name: "home" });
      alert("Bạn không có quyền truy cập vào mục này");
    }

    //Lấy tất cả tài khoản khách hàng
    axios.get("http://127.0.0.1:8000/api/getArchive").then((res) => {
      this.info = res.data;
      // console.log(this.info);
    });
    //  .error(error => console.log(error));
  },

  methods: {
    // Xóa thông tin vĩnh viễn
    deleted(id) {
      if (confirm("Bạn có chắc chắn xóa không ?")) {
        axios
          .delete(`http://127.0.0.1:8000/api/user/${id}`)
          .then((res) => {
            if (res.status === 201) {
              alert("Xóa thành công");
              window.location.reload();
            }
          })
          .catch((error) => {
            console.error("Lỗi khi xóa nhân viên:", error);
          });
      }
    },

    // Khôi phục thông tin
    restore(id) {
      axios
        .get(`http://127.0.0.1:8000/api/restore/${id}`)
        .then((res) => {
          if (res.status == 200) {
            alert("Khôi phục dữ liệu thành công");
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));
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
