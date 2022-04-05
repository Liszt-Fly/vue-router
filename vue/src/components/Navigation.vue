<script setup>

</script>

<template>
    <div class="navigation">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link
            :to="{ name: 'Article' }"
            :class="{ 'router-link-exact-active': $route.path.includes('articles') }"
        >Article</router-link>
        <router-link :to="{ name: 'User' }">User</router-link>
        <router-link :to="{ name: 'Member' }">Mmeber</router-link>
    </div>
</template>

<style lang="scss">
.navigation {
    a {
        background-color: white;
        text-decoration: none;
        padding: 5px 10px;
        color: #333;
    }
}
</style>