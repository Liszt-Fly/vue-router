<template>
    <div class="front-layout">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'

</script>
<style>
.front-layout {
    background-color: #f3f3f3;
    padding: 20px;
}
</style>