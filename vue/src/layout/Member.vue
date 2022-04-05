<template>
    <div class="layout-member">
        <nav>
            <div v-for="(link, index) of links" :key="index" @click="push(link)">{{ link.title }}</div>
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const links = [
    { name: "Home", title: "首页" },
    { name: "Mobile", title: "修改手机号" },
    { name: "Email", title: "绑定邮箱" }
]
const push = link => {

    router.push({ name: link.name })
}
</script>
<style lang="scss">
.layout-member {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 20px;
    nav {
        grid-column: span 3;
        display: flex;
        flex-direction: column;
        background-color: #e74c3c;
        padding: 20px;
        margin-right: 20px;
        div {
            text-decoration: none;
            color: #ddd;
            cursor: pointer;
        }
    }
    main {
        grid-column: span 9;
    }
}
</style>