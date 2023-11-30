<template>
  <header>
    <div class="header-content">
      <v-layout row justify-center>
        <v-toolbar
          app
          dark
          color="blue-grey darken-1"
          class="hidden-xs-and-down"
        >
          <v-toolbar-title>Desktop Menu</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              v-for="item in nav"
              :key="item.text"
              @click="goToRoute(item.route)"
            >
              {{ item.text }}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-layout>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const nav = ref([
  {
    text: "Home",
    route: { name: "home" },
  },
  {
    text: "Manufacturer",
    route: { name: "manufacturer" },
  },
  {
    text: "Drug",
    route: { name: "drug" },
  },
  {
    text: "Warranty",
    route: { name: "warranty" },
  },
  {
    text: "Account",
  },
]);

const router = useRouter();

const goToRoute = (route) => {
  if (route && route.name) {
    router.push({ name: route.name });
  } else {
    // Handle if no route is specified or if the route doesn't have a name
    console.error("Invalid route:", route);
  }
};

const open = ref(["Account"]);
const admins = ref([]);
const cruds = ref([]);

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
</style>
