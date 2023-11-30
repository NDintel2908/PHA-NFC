<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="mb-4">
          <v-img :src="product.image" height="75%" width="75%" />
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="mb-4">
            <v-card-title>
              <h2>{{ product.name ??  'Product Name' }}</h2>
            </v-card-title>
            <v-card-text>
              {{ product.description  ?? '--'}}
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

<script setup>
import { ref } from "vue";

const product = ref({
  name: "",
  description:"",
  image: "https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg",
});

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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  float: right;
  right: 0;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  left: 0;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.account-dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.accoutn-dropdown:hover .account-dropbtn {
  background-color: #111;
}

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
</style>
