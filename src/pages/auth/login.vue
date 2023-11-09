<template>
  <v-row
    class="d-flex align-center justify-center mr-3 ml-3"
    style="height: 100vh"
  >
    <v-col md="4" lg="4" sm="6" xs="6">
      <v-card class="pl-3 pr-3 pb-3 pt-3" elevation="5">
        <v-card-title class="headline text-center">LOGIN FORM</v-card-title>
        <v-text-field
          v-model="form.email"
          variant="outlined"
          color="primary"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          variant="outlined"
          color="primary"
          type="password"
          label="Password"
          :rules="[requiredValidator]"
        ></v-text-field>
        <v-row class="align-center">
          <v-col cols="6">
            <v-switch
              v-model="form.rememberMe"
              label="Remember Me"
              color="success"
              value="true"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="6">
            <RouterLink to="/forgot" class="text-body-2 font-weight-regular">
              Forgot Password?
            </RouterLink>
          </v-col>
        </v-row>
        <v-btn
          @click="hanleSubmit"
          type="submit"
          color="primary"
          block
          class="mt-2"
          :loading="isLoading"
          :disabled="isLoading"
          >Sign in</v-btn
        >
        <div class="mt-2">
          <p class="text-body-2">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { requiredValidator, emailValidator} from '../components/validator';
const isLoading = ref(false);
const form = ref({
  email: "",
  password: "",
  rememberMe: false,
});
const hanleSubmit = () => {
  isLoading.value = true;

  console.log(form.value);
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
