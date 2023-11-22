<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <img src="logo.png" alt="Logo" /> <!-- Replace 'logo.png' with your actual logo file -->
      </div>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/drug">Drug</a></li>
          <li><a href="/manufacturer">Manufacturer</a></li>
          <li><a href="/warranty">Warranty</a></li>
          <li>
            <div class="account-dropdown">
              <button class="account-dropbtn">Account</button>
              <div class="dropdown-content">
                <a href="#">Login</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>

    </div>
  </header>
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

  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="mb-4">
          <v-img :src="product.image" height="75%" width="75%" />
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="mb-4">
            <v-card-title>
              <h2>{{ product.name }}</h2>
            </v-card-title>
            <v-card-text>
              {{ product.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>Thêm vào giỏ hàng</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>



</template>

<script>
export default {
  name: 'Header',
  // Other logic can be added here
  name: 'Footer',
  // Các logic xử lý khác có thể được thêm ở đây

data() {
    return {
      product: {
        name: "Fucudan",
        description: "Fucoidan là chuỗi cao phân tử polysaccharides có thành phần chính là fucose. Fucoidan có nguồn gốc là một loại chất nhờn chỉ có trong tảo nâu như Kombu, Wakame (Mekabu), Mozuku và là chất xơ hòa tan trong nước, trong đó loài rong biển Mozuku có hàm lượng Fucoidan cao nhất [1]. Okinawa Kassou Fucoidan có chứa 100% chiết xuất Fucoidan từ tảo Mozuku từ Okinawa Nhật Bản kết hợp với kỹ thuật tinh chế rây phân tử độc quyền đã giữ lại được hàm lượng Fucoidan tinh khiết cao đến > 95%. Mỗi viên Okinawa Kassou Fucoidan chứa 220mg Fucoidan cô đặc.",
        image: "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2022/11/vien-uong-fucoidan-umi-no-shizuku-cua-nhat-ban-6373500f6576f-15112022153839.jpg",
      },
    };
  }
}



</script>

<style scoped>
/* CSS for header */
header {
  background-color: #333;
  color: #fff;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0;
  font-size: larger;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo img {
  max-width: 100px; /* Adjust the size of the logo */
  height: auto;
  margin: 0 20px;
}

nav {
  flex: 1; /* Allow the navigation to take remaining space */
  text-align: center; /* Center-align the list */
  height: max-content;
}

nav ul {
  list-style: none;
  padding: 0;
  display: inline;
  justify-content: center;
  
}

nav ul li {
  float: left;
  margin: 0px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 16px;
}

nav ul li a:hover {
  background-color: #111;
}



nav ul li:last-child {
  float: right;
}

.account-dropbtn {
background-color: #333;
color: #fff;
padding: 17px;
font-size: larger;
border: none;
}

/* The container <div> - needed to position the dropdown content */
.account-dropdown {
position: relative;
display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
display: none;
position: absolute;
background-color: #f1f1f1;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
float: right;
right:0;
}

/* Links inside the dropdown */
.dropdown-content a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
left:0;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.account-dropdown:hover .dropdown-content {display: block; }

/* Change the background color of the dropdown button when the dropdown content is shown */
.accoutn-dropdown:hover .account-dropbtn {background-color: #111;}

.account-dropbtn:hover {
background-color: #111;
transition: 0.4s;
}


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

.mb-4 {
    margin-top: 10em; /* Điều chỉnh giá trị này để thay đổi khoảng cách */
  }
</style>






