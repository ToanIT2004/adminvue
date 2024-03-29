<template>
    <footer-vue/>
    <!-- v-if="issetLocalStoge != null && issetLocalStoge > 0" -->
    <div class="d-flex nen">
      <header-vue/>
      <!-- v-if="issetLocalStoge != null && issetLocalStoge > 0" -->
      <router-view></router-view>
    </div>
</template>

<script>
import FooterVue from './components/header.vue'
import HeaderVue from './components/footer.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
  },

  data() {
    return {
      issetLocalStoge: sessionStorage.getItem('idnv')
    }
  },

  // created() {
  //   if(this.issetLocalStoge === null && this.issetLocalStoge < 1) {
  //     this.$router.push({ name: 'login' }); 
  //   }
  // },
}
</script>

<style>
.nen{
  background-color: rgb(214, 218, 218);
}
</style>
