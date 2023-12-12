<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
const manu = ref(
  {
    name: "Paracetamol",
    calories: "0",
    ingredients: "1",
    country: "USA",
    license: "31415",
    details: "",
  },
  {
    name: "Ibuprofen",
    calories: "0",
    ingredients: "1",
    country: "Germany",
    license: "99622",
    details: "",
  },
  {
    name: "Amoxicillin",
    calories: "0",
    ingredients: "1",
    country: "Vietnam",
    license: "55583",
    details: "",
  },
  {
    name: "Omeprazole",
    calories: "0",
    ingredients: "1",
    country: "Singapore",
    license: "71805",
    details: "",
  },
  {
    name: "Ciprofloxacin",
    calories: "0",
    ingredients: "1",
    country: "Thailand",
    license: "67823",
    details: "",
  }
);
</script>

<style>
.my-table {
  margin-top: 10px;
}
.v-row{
margin-top: 3vh;
  }
</style>
