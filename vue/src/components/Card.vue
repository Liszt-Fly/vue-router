<script setup></script>


<template>
    <div class="card">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>


<style scoped lang="scss">
.card {
    header {
        background-color: #ddd;
        padding: 10px;
    }
    margin-left: 20px;
}
</style>