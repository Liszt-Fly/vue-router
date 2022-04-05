<script setup>
import { find } from '@/api/article'
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import Listarticle from './Listarticle.vue'
import Card from '@/components/Card.vue'

const route = useRoute()
let article = ref()
watch(route, async () => {
    console.log("change")
    article.value = await find(route.params.id)
})
article.value = await find(route.params.id)
</script>
<template>
    <div class="article-show">
        <div class="show">
            <h2>{{ article.title }}</h2>
            <div>{{ article.content }}</div>
        </div>
        <div class="list-article">
            <Card>
                <template #header>文章列表</template>
                <listarticle></listarticle>
            </Card>
        </div>
    </div>
</template>


<style scoped lang="scss">
.article-show {
    grid-template-columns: repeat(6, 1fr);
    display: grid;
    .show {
        grid-column: span 4;
        padding: 20px;
        background-color: white;
        div {
            color: #666;
            font-size: 1rem;
            line-height: 2rem;
        }
    }
    .list-article {
        grid-column: span 2;
    }
}
</style>