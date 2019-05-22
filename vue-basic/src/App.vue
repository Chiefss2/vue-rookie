<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="./helloworld">Helloworld</router-link></li>
    </ul>

    <!-- 最高级路由出口  匹配到的路由将在这里显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
     
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
</style>
