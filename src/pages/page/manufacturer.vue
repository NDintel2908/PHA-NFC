<template>
  <v-table class="my-table" theme="white">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
        <th class="text-left">Ingredients</th>
        <th class="text-left">Country</th>
        <th class="text-left">License</th>
        <th class="text-left">Detail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in manu" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.ingredients }}</td>
        <td>{{ item.country }}</td>
        <td>{{ item.license }}</td>
        <td>
          <v-btn @click="viewDetails(item)">View</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import { ref } from "vue";
const manu = ref(
  {
    name: "",
    calories: "",
    ingredients: "",
    country: "",
    license: "",
    details: "",
  },
  {
    name: "",
    calories: "",
    ingredients: "",
    country: "",
    license: "",
    details: "",
  },
  {
    name: "",
    calories: "",
    ingredients: "",
    country: "",
    license: "",
    details: "",
  },
  {
    name: "",
    calories: "",
    ingredients: "",
    country: "",
    license: "",
    details: "",
  },
  {
    name: "",
    calories: "",
    ingredients: "",
    country: "",
    license: "",
    details: "",
  }
);
</script>

<style>
.my-table {
  margin-top: 100px;
}
</style>
