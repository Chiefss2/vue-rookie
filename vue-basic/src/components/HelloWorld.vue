<template>
  <div class="helloworld">
    <h1>this is helloworld</h1>
    <h5>les-01 - {{ title }}</h5>

    <!-- v-model双向数据绑定 单向数据流 input/textarea/select -->
    <label>姓名 </label>
    <input type="text" v-model="msg">
    <span> {{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "helloworld",
  data(){
    return {
      msg: 'helloworld',
      title: "v-model双向数据绑定 单向数据流 input/textarea/select"
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
