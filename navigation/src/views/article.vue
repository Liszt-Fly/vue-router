<script setup>
import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
import router from '../router'
const articles = ref([])
const route = useRoute()
const page = ref(route.query.id ?? 1)
onBeforeRouteUpdate(async () => {
    console.log(90)
    articles.value = await fetch(`http://127.0.0.1:3003/articles`).then(r => r.json())
})

watch(page, async page => {
    articles.value = await fetch(`http://127.0.0.1:3003/articles?page=${page}`).then(r => r.json())
}, { immediate: true })
// watch(route, async (route) => {
//     if (route.name == 'article') {
//         articles.value = await fetch(`http://127.0.0.1:3003/articles`).then(r => r.json())

//     }
// }, { immediate: true })
//在组件初始化渲染的时候就要获取数据
// const load = async () => {
//     return await fetch(`http://127.0.0.1:3003/articles`).then(r => r.json())
// }
// export default {
//     data() {
//         return {
//             articles: []
//         }
//     },
//     beforeRouteEnter(to, from, next) {
//         next(async (vm) => {
//             vm.articles = load()
//         })
//     },
//     async beforeRouteUpdate() {
//         this.articles = load()
//     }
// }
</script>
<template>
    <ul>
        <li v-for="article of articles" :key="article.id">{{ article.title }}</li>
    </ul>
    <button @click="page = 2">下一页--{{ page }}</button>
</template>

<style lang="scss">
</style>