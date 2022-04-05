<script setup>

</script>

<template>
  <suspense>
    <div>
      <div class="link">
        <router-link :to="{ name: 'home' }">home</router-link>
        <router-link :to="{ name: 'about' }">about</router-link>
        <router-link :to="{ name: 'article' }">article</router-link>
      </div>
      <router-view #default="{ Component, route }">
        <transition
          name="fade"
          :enter-active-class="route.meta.enterClass ?? 'animate__animated animate__lightSpeedInLeft'"
        >
          <component :is="Component"></component>
        </transition>
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
