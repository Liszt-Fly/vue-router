<script setup>

import { ref, } from 'vue'
import { all } from '@/api/user'
const users = ref(await all())
</script>

<template>
  <router-link v-for="user in users" class="item" :to="`/show-user/${user.id}`">{{ user.name }}</router-link>
</template>

<style scoped>
.item {
  background-color: #42b983;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
}
</style>
