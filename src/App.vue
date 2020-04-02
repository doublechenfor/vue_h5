<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="home"></router-view>
  </div>
</template>

<script>
// import login from './components/login'

export default {
    name: 'app',
    components: {
        // login
    },
    mounted(){
        this.$router.push({
            name:'login'
        })
    }
}
</script>

<style>
#app {
  width: 100vw;
  height:100vh;
}
</style>
