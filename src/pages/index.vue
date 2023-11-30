
<template>
    
</template>
<script setup>
import router from "../router";
import { onMounted } from 'vue';
onMounted(() => {
    checkAuth()
});
 const checkAuth = () => {
    if (localStorage.getItem('isLogin') != true){
        router.push({name: 'login'});
    }
};
</script>