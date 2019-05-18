<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'showblogs'}" exact>博客</router-link>
      <router-link :to="{name: 'addblog'}" exact>写博客</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#nav{
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: crimson;
  a{
    display: inline-block;
    padding: 10px;
    margin-right: 20px;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
  }
  .router-link-active{
    color: #333;
    background-color: #fff;
  }
}
</style>
