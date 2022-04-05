<script setup>


</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/About">About</router-link>

  <hr />
  <router-view></router-view>
</template>

<style>
a {
  display: inline-block;
  margin-right: 20px;
}
</style>
