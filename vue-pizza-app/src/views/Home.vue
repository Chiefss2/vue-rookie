<template>
  <div class="home">
     <h1>This is an home page</h1>
     <button @click="gotoMenu" class="btn btn-success">let's order</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    gotoMenu () {
      // 跳转到上一次浏览的路由页面
      // this.$router.go(-1)
      // 指定跳转到某一路由页面
      // this.$router.replace('./login')
      // 指定跳转到路由名字
      // this.$router.replace({name:'homeLink'})

      // 更常用的是使用push跳转 同样可以使用路由名字
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 1000px;
  text-align: center;
  background-color: #eee;

  h1{
    line-height: 700px;
  }
}
</style>
