<script >
export default {
    data() {
        return {
            title: "向军"
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log("具体组件中:beforeRouteEnter")
        next(vm => { vm.title = "yahoo" })
        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         next(vm => vm.title = 'yahoo')
        //     }, 3000)
        // })

    },
    beforeUpdate(to, from) {
        console.log("具体组件中:beforeRouteUpdate")

    },
    beforeRouteLeave(to, from, next) {
        if ((confirm('真的要离开吗?'))) {
            next()
        }
        console.log("具体组件中:beforeRouteLeave")
    }
}
</script>
<template>about-{{ title }}</template>
<style lang="scss"></style>