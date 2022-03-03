<template>
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'Login'}">Login</router-link> |
    <router-link :to="{name: 'Register'}">Register</router-link> |
    <router-link :to="{name: 'Products'}">Products</router-link> |
    <router-link :to="{name: 'Cart'}">Cart</router-link> | 
    <router-link :to="{name: 'Profile'}">Profile</router-link> |
    <router-link :to="{name: 'Home'}" @click="logout">Logout</router-link>
</template>

<script>
export default {
    // methods: {
    //     logout() {
    //         localStorage.clear();
    //     }
    // }
}
</script>

<style>

</style>