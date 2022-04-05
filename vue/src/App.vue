<script setup>
import Navigation from '@/components/Navigation.vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <suspense>
    <template #default>
      <div>
        <router-view></router-view>
      </div>
    </template>
  </suspense>
</template>

<style>
.navigation {
  margin-bottom: 20px;
}

.home {
  background-color: #ecf0f1;
  padding: 20px;
}
.article {
  background-color: #bdc3c7;
  padding: 20px;
}
</style>
