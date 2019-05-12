<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" class="navbar-brand">Pizza点餐系统</a>
      <ul class="navbar-nav">
        <!-- router-link可以自定义标签 e.g. tag="div" -->
        <!-- <li><router-link tag="div" to="/" class="nav-link">主页</router-link></li> -->
        <!-- 动态绑定路由地址 e.g. :to="homeLink" -->
        <!-- <li><router-link :to="homeLink" class="nav-link">主页</router-link></li> -->
        <li>
          <router-link to="/" class="nav-link">主页</router-link>
        </li>
        <li>
          <router-link to="/menu" class="nav-link">菜单</router-link>
        </li>
        <li>
          <router-link to="/admin" class="nav-link">管理</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">关于我们</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li>
          <router-link to="/login" class="nav-link">登录</router-link>
        </li>
        <li>
          <router-link to="/register" class="nav-link">注册</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
</style>
