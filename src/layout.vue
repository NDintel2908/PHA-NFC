<script setup>
import { RouterView } from "vue-router";
import Header from "./pages/page/Header.vue";
import Footer from "./pages/page/Footer.vue";
</script>

<template>
  <v-container>
    <v-row>
      <Header />
    </v-row>

    <v-row class="pt-15">
      <RouterView />
    </v-row>

    <v-row>
      <Footer />
    </v-row>
  </v-container>
</template>