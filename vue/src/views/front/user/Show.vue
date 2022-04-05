<script setup>
import { find } from '@/api/user'
import { useRoute } from 'vue-router'
const route = useRoute()
const user = await find(route.params.id)
</script>
<template>
    <div class="show">
        <h2>{{ user.name }}</h2>
    </div>
</template>


<style scoped lang="scss">
.show {
    padding: 20px;
    background-color: white;
    div {
        color: #666;
        font-size: 1rem;
        line-height: 2rem;
    }
}
</style>