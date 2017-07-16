<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>---------------{{ $route.params.username }}------------</h3>
    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'I am Hi page'
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: rebeccapurple;
  }
</style>
