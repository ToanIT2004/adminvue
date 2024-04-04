const admin = [
   {
      path: '/',
      name: 'login',
      component: () => import('../components/login.vue')
   },
   {
      path: '/home',
      name: 'home',
      component: () => import('../components/home.vue')
   },
   {
      path: '/them',
      name: 'them',
      component: () => import('../components/them.vue')
   },
   {
      path: '/nhanvien',
      name: 'nhanvien',
      component: () => import('../components/nhanvien.vue')
   },
   {
      path: '/khachhang',
      name: 'khachhang',
      component: () => import('../components/khachhang.vue')
   },
   {
      path: '/themnv',
      name: 'themnv',
      component: () => import('../components/themnv.vue')
   },
   {
      path: '/suanv/:id',
      name: 'suanv',
      component: () => import('../components/themnv.vue')
   },
   {
      path: '/suakh/:id',
      name: 'suakh',
      component: () => import('../components/themnv.vue')
   },
   {
      path: '/khoiphuc',
      name: 'khoiphuc',
      component: () => import('../components/khoiphuc.vue')
   },
   {
      path: '/doimatkhau',
      name: 'doimatkhau',
      component: () => import('../components/doimatkhau.vue')
   },
   {
      path: '/trangchu',
      name: 'trangchu',
      component: () => import('../components/trangchu.vue')
   },
   {
      path: '/chitiet',
      name: 'chitiet',
      component: () => import('../components/chitiet.vue')
   },
   {
      path: '/suasp/:id',
      name: 'suasp',
      component: () => import('../components/them.vue')
   },
];

export default admin;