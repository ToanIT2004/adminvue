<template>
    <footer-vue v-if="issetLocalStoge != null && issetLocalStoge > 0"/>
    <div class="d-flex bg-nen">
      <header-vue v-if="issetLocalStoge != null && issetLocalStoge > 0"/>
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

  created() {
    if(this.issetLocalStoge === null && this.issetLocalStoge < 1) {
      this.$router.push({ name: 'login' }); 
    }
  },
}
</script>

<style>
.bg-nen{
  background-color: #b2b2b2;
  width: 100%;
  height: 100%;
}
.nen {
  width: 100%;
  height: 100%;
  --s: 84px;
  --c1: #f2f2f2;
  --c2: #cdcbcc;
  --c3: #999999;

  --_g: 0 120deg, #0000 0;
  background: conic-gradient(
      from 0deg at calc(500% / 6) calc(100% / 3),
      var(--c3) var(--_g)
    ),
    conic-gradient(
      from -120deg at calc(100% / 6) calc(100% / 3),
      var(--c2) var(--_g)
    ),
    conic-gradient(
      from 120deg at calc(100% / 3) calc(500% / 6),
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from 120deg at calc(200% / 3) calc(500% / 6),
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from -180deg at calc(100% / 3) 50%,
      var(--c2) 60deg,
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from 60deg at calc(200% / 3) 50%,
      var(--c1) 60deg,
      var(--c3) var(--_g)
    ),
    conic-gradient(
      from -60deg at 50% calc(100% / 3),
      var(--c1) 120deg,
      var(--c2) 0 240deg,
      var(--c3) 0
    );
  background-size: calc(var(--s) * 1.732) var(--s);
}

</style>
