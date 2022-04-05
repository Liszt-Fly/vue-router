<script setup>
import { computed } from 'vue'
import { router } from '../router'
import { ref } from 'vue'
import { path } from '../router'
const view = computed(() => {
    //不再需要const path来获取路径，而是直接获得来自router.js中的path路径进行比对
    const route = router.routes.find(route => route.path == path.value)
    return route.component
})


</script>

<template>
    <component :is="view" />
</template>