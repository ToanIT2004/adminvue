<template>
<div class="container ">
    <h1> Thêm Sản Phẩm</h1>
    <div class="mt-4">
        <form action="" method="post">
        <div >
       Tên Sản Phẩm:  <input type="text" class="form-control  "  aria-label="First name">
    </div>
    <div class="mt-4" >
        Hình Ảnh:  <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile01">
          </div>
     </div>
     <div class="mt-4" >
        Giá:  <input type="text" class="form-control"  aria-label="First name">
     </div>
     <div class="mt-4" >
        Bảo hành:  <input type="text" class="form-control"  aria-label="First name">
     </div>
     <div class="mt-4" >
        Chính sách:  <input type="text" class="form-control"  aria-label="First name">
     </div>
        <div class="form-floating mt-4">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 200px"></textarea>
            <label for="floatingTextarea2">Mô Tả</label>
          </div>
          <div class="form-floating mt-4">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 500px"></textarea>
            <label for="floatingTextarea2">Chi Tiết</label>
          </div>
        </form>
        <button type="button" class="btn btn-success mt-3 mb-5">Thêm Sản Phẩm</button>
    </div>
</div>
</template>
<script>
export default {
    name: 'HelloWorld',
  data() {
    return {
      
    }
   },
}
</script>
<style>

</style>
