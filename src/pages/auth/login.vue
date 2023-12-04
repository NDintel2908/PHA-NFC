<template>
  <div class="align-center">
    <div class="d-flex justify-content-center align-items-center h-screen">
      <v-sheet
        class="bg-deep pa-12 rounded-lg"
        :class="responsiveClasses"
        max-width="344"
      >
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form @submit.prevent="handleLogin">
            <v-text-field
              v-model="form.email"
              :rules="[required('Email')]"
              class="mb-2"
              label="Email"
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              :rules="[required('Password')]"
              label="Password"
              type="password"
              placeholder="Enter your password"
            ></v-text-field>

            <br />

            <v-btn
              :loading="form.loading"
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const form = ref({
  email: "",
  password: "",
  loading: false,
});

const required = (fieldName) => (value) =>
  !!value || "${fieldName} is required";

const handleLogin = () => {
  console.log(form.value);
};

const responsiveClasses = computed(() => {
  return {
    "md:w-1/2": true, // 50% width trên màn hình md (medium)
    "lg:w-1/3": true,
  };
});
</script>
<style scoped>
.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh; /* Đảm bảo form nằm giữa trang */
  width: 100vw;
}
.mx-auto px-6 py-8 {
  width: 100px;
}
</style>
