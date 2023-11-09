<template>
  <v-table theme="white">
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
      <tr v-for="item in desserts" :key="item.name">
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
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          ingredients: "abc",
          country: "switzerland",
          license: "yes",
          details: "view",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          ingredients: "abc",
          country: "switzerland",
          license: "yes",
          details: "view",
        },
        {
          name: "Eclair",
          calories: 262,
          ingredients: "abc",
          country: "switzerland",
          license: "yes",
          details: "view",
        },
        {
          name: "Cupcake",
          calories: 305,
          ingredients: "abc",
          country: "switzerland",
          license: "yes",
          details: "view",
        },
        {
          name: "Gingerbread",
          calories: 356,
          ingredients: "abc",
          country: "switzerland",
          license: "yes",
          details: "view",
        },
      ],
    };
  },
};
</script>
