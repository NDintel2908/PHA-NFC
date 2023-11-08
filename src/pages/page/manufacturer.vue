<template>
    <div id="app">
      <Header />
      <router-view /> <!-- Đây là nơi hiển thị nội dung của từng trang -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  export default {
    name: 'manufacturer',
    components: {
      Header,
      Footer
    }
    // Các logic xử lý khác có thể được thêm ở đây
  }
  </script>
  
  <style>
  /* CSS cho trang chính */
  #manufacturer {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; /* Để đỡ bị header che phần đầu nội dung */
  }
  </style>
  