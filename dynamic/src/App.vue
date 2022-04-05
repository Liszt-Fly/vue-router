<script setup>

</script>

<template>
  <suspense>
    <div>
      <router-view #default="{ Component }">
        <div class="link">
          <div v-for="route of $router.getRoutes()" :key="route.name">
            <router-link :to="{ name: route.name }" v-if="route.meta.isMenu">{{ route.meta.title }}</router-link>
          </div>
        </div>

        <component :is="Component"></component>
      </router-view>
    </div>
  </suspense>
</template>

<style lang="scss">
.link {
  a {
    display: inline-block;
    background-color: #16a085;
    color: white;
    margin-right: 20px;
    text-align: center;
    padding: 10px;
  }
}
// .fade-enter-from {
//   transform: translateX(-100%);
// }
// .fade-enter-active {
//   transition: all 1s ease;
// }
// .fade-enter-to {
//   transform: translateX(0);
// }

// .fade-leave-from {
//   transform: translateX(0);
// }
// .fade-leave-active {
//   transition: all 1s ease;
// }
// .fade-leave-to {
//   transform: translate(100%);
// }
</style>
