<template>
  <div class="container">
    <img src="https://altcoinsbox.com/wp-content/uploads/2023/03/metamask-logo-300x300.webp" alt="Metamask Logo" @click="loginWithMetamask" />
  </div>
</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider';

export default {
  methods: {
    async loginWithMetamask() {
      try {
        const provider = await detectEthereumProvider();
        if (provider) {
          // Metamask is installed
          await provider.request({ method: 'eth_requestAccounts' });
          const accounts = await provider.request({ method: 'eth_accounts' });
          // Do something with the logged in account
          console.log('Logged in with Metamask:', accounts[0]);
          // Redirect or perform actions after login
        } else {
          // Metamask is not installed
          console.error('Metamask is not installed.');
          // Handle case when Metamask is not installed
        }
      } catch (error) {
        console.error('Error logging in with Metamask:', error);
        // Handle error during login process
      }
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center; /* Canh giữa theo chiều ngang */
  align-items: center; /* Canh giữa theo chiều dọc */
  height: 90vh; /* Chiều cao của toàn bộ màn hình */
}

.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.metamask-logo {
  width: 50px; /* Độ rộng của logo */
  height: auto; /* Chiều cao tự động điều chỉnh để giữ nguyên tỷ lệ */
  margin-bottom: 10px; /* Khoảng cách giữa logo và chữ */
}
</style>