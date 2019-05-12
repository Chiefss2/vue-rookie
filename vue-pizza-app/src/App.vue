<template>
  <div id="app">
    <div class="container">
      <AppHeader></AppHeader>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <div class="container">
      <router-view name="Menu"></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/views/Header'

export default {
  name: 'home',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">

</style>
