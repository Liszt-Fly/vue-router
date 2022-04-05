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
    <div class="home">
        <h2>Article--Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, sunt?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum ut assumenda quidem, cumque optio quia, praesentium ea atque debitis officia eius voluptatibus veniam facere perspiciatis tenetur veritatis sapiente. Cumque incidunt iusto quae aut beatae, architecto consequuntur, iste fugit placeat, quisquam distinctio suscipit qui totam assumenda labore quidem? Soluta nemo, consectetur non commodi perspiciatis nisi sed error inventore laudantium tempora incidunt labore voluptas nostrum reprehenderit porro aliquid quas at dolore itaque ducimus laborum ratione. Non earum rerum adipisci quisquam architecto nesciunt. Numquam iure atque accusantium distinctio inventore ut earum aperiam labore aspernatur cumque dolores, officia sit, totam quibusdam perferendis recusandae enim aliquam reprehenderit sed dicta molestiae voluptates. Nulla vel voluptatum sit distinctio corporis praesentium amet eos saepe! Cupiditate fugiat facilis non nemo? Perferendis, reprehenderit incidunt maxime numquam quia odit velit dolor assumenda, possimus voluptas quo aut quis fuga aperiam architecto harum odio. Dolores quisquam cupiditate excepturi quasi quod culpa qui modi tenetur, provident nisi corporis veniam veritatis voluptates error porro eveniet possimus iusto corrupti dolorum reprehenderit sequi nobis. Natus ducimus minima totam veniam nulla in possimus suscipit, ullam dignissimos aspernatur ipsam qui ex corporis nisi quae rerum perferendis, necessitatibus quasi iusto error! Voluptate blanditiis, dolores ex reiciendis consequatur repellat voluptatibus.</p>
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