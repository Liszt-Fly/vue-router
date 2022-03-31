<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { router } from '../router'
const lists = await fetch(`http://127.0.0.1:3003/articles`).then(res => res.json())
let route = useRoute()
const article = ref({})
watch(() => route.query, async query => {
    article.value = await fetch(`http://127.0.0.1:3003/articles/${query.id}`).then(res => res.json())
    console.log(article.value)
}, { immediate: true })


</script>
<template>
    <div class="page">
        <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.content }}</p>
        </div>
        <div class="lists">
            <router-link
                :to="{ name: 'article', query: { id: article.id } }"
                v-for="article in lists"
            >{{ article.title }}</router-link>
        </div>
    </div>
</template>

<style lang="scss">
.page {
    display: flex;
    p {
        font-size: 0.8rem;
    }
    .lists {
        min-width: 2;
        a {
            display: block;
            color: #666;
            padding: 10px;
            border: solid 1px #666;
            width: 300px;
            margin-left: 10px;
            &:first-child {
                margin-top: 20px;
            }
        }
    }
}
</style>