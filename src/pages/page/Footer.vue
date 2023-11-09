<template>
    <footer>
      <p>&copy; 2023 YourWebsite. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <!-- Các liên kết khác -->
        </ul>
      </nav>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    // Các logic xử lý khác có thể được thêm ở đây
  }
  </script>
  
  <style>
  /* CSS cho footer */
  footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 0 10px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
  }
  </style>
  