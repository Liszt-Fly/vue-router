<script setup>

import { ref, } from 'vue'
import { all } from '../api/article'
const articles = ref(await all())
</script>

<template>
  <router-link
    v-for="article in articles"
    class="item"
    :to="`/articles/show/${article.id}`"
  >{{ article.title }}</router-link>
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
a.router-link-exact-active {
  background-color: orangered;
}
</style>
