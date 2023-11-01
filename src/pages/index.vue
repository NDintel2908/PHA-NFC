
<template>
    {{ checkAuth() }}
</template>
<script setup>
import router from "../router";

 const checkAuth = () => {
    if (!localStorage.getItem('isLogin')){
        router.push({name: 'login'});
    }
};
</script>
