<template>
  <div id="app">
    <!-- 事件修饰符 -->
    <p>{{ name }} - {{ age }}岁</p>
    <!-- prevent阻止默认事件 -->
    <a @click.prevent href="www.bai.com">www.baidu.com</a>
    <!-- once只触发一次事件 -->
    <button @click.once="add(5)">加岁数</button>
    <button @click="substract(5)">减岁数</button>
    <!-- stop阻止事件冒泡 -->
    <div id="canvas" @mousemove="updateXY">
      {{ x }} - {{ y }} - <span @mousemove.stop>stop Moving</span>
    </div>

    <!-- 键盘事件及键盘修饰符 -->
    <h5>键盘Events</h5>
    <label>姓名：</label>
    <!-- 只有在按下enter才调用keyup中的方法 -->
    <input type="text" @keyup.enter="logName">
    <label>年龄：</label>
    <input type="text" @keyup.alt.enter="logAge">
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      name: 'chiefs',
      age : 27,
      x: 0,
      y: 0
    }
  },
  methods: {
    updateXY: function(event){ this.x = event.offsetX; this.y = event.offsetY; },

    //键盘事件
    logName: function(){ console.log('你正在输入你的名字...') },
    logAge: function(){ console.log('你正在输入你的年龄...') },
  },
  computed:{
    add: function(){
      return function(inc){ this.age += inc; }
    },
    substract: function(){
      return function(dec){ this.age -= dec; }
    }
  }
}
</script>

<style lang="scss">
#canvas{ width: 200px; height: 200px; line-height: 200px; text-align: center; border: 1px solid #ccc;}
</style>
