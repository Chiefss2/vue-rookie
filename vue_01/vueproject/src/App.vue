<template>
  <div id="app">
    <!-- 文本值 v-text,v-html -->
    <h3 v-text="msg"></h3>
    <h4 v-once v-text="msg"></h4>
    <h4 v-html="htmlMsg"></h4>

    <!-- 属性值 v-bind指令 -->
    <h4 :title="bindmsg">v-bind指令，缩写:，绑定标签的属性</h4>

    <!-- v-if,v-else,v-show指令 -->
    <p v-if="seen">v-if指令,控制元素show and hide</p>
    <p v-else>v-else指令,v-if指令不成立时就显示</p>

    <!-- v-for指令遍历数组和对象 -->
    <!-- v-for指令权重大于v-if指令，即先遍历再显示 -->
    <!-- 遍历数组 -->
    <ul>
      <li v-for="(book,idx) in books">{{ (idx+1) }} - {{ book.name }} - {{ book.price }}</li>
    </ul>
    <template v-for="(book,idx) in books">
      <span>{{ idx }} - </span>
      <span>{{ book.name }} - </span>
      <span>{{ book.price }} - </span>
    </template>
    <table>
      <thead>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.price }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 遍历对象 -->
    <p v-for="(value,key) in person">{{ key }} - {{ value }}</p>

    <!-- computed计算属性 -->
    <a :href="url">{{ url }}</a>
    <!-- watch 侦听器 -->
    <a :href="watchurl" class="link" :class="classobj">{{ watchurl }}</a>

    <!-- v-model指令 实现表单输入和应用状态之间的双向绑定 -->
    <p v-text="clickMsg"></p>
    <input type="text" v-model='clickMsg'>

    <!-- v-on指令 -->
    <button @click="reverseMsg">逆转消息</button>

    <!-- 应用其他vue组件 import后使用 -->
    <fircomponent></fircomponent>
  </div>
</template>

<script>
import fircomponent from './component/fircomponent.vue';
export default {
  name: 'app',
  data(){
    return {
      msg: 'Welcome to Your Vue.js App',
      htmlMsg: '<strong>Welcome to Your Vue.js App</strong>',
      bindmsg: '页面加载于 ' + new Date().toLocaleString(),
      seen : true,
      books: [
        { id: 0, name: 'java从入门到脱发', price: 85 },
        { id: 1, name: 'javascript从入门到放弃', price: 80 },
        { id: 2, name: 'c++从入门到脱发', price: 83 },
        { id: 3, name: 'javascript设计模式', price: 75 },
      ],
      person: {
        name: 'chiefs',
        age: 1992,
        hates: 'apple',
        gender: 'male'
      },
      clickMsg: 'hello chiefs\'s vue',
      protocal: 'http:',
      host: 'www.qq.com',
      location:{
        protocal: 'http:',
        host: 'www.baidu.com',
      },
      isActive: true,
      watchurl: '',
      grocery:[
        { id:0, text:'蔬菜' },
        { id:1, text:'奶酪' },
        { id:2, text:'香蕉' }
      ]
    }
  },
  methods: {
    reverseMsg: function(){ this.clickMsg = this.clickMsg.split('').reverse().join(''); }
  },
  watch: {
    // watch通常用来处理一些异步的方法
    location: {
      immediate: true,
      deep: true,
      handler: function(newValue, oldValue){ this.watchurl = newValue.protocal + '//' + newValue.host; }
    }
  },
  computed:{
    // computed 在依赖条件不变时只返回第一次计算的结果，缓存
    // vue推荐computed 用来处理一些同步的方法
    url: {
      get: function(){
        return this.protocal + '//' + this.host;
      },
      set: function(val){
        var tmp = val.split('//');
        if(tmp.length>1){
          this.protocal = tmp[0];
          this.host = tmp[1];
        }
      }
    },
    classobj: function(){
      return { active: this.isActive }
    }

    //computedMsg: function(){ return this.clickMsg.split('').reverse().join(''); }

    // computed里的方法也可以传参，闭包
    // computedMsg:function(){
    //   return function(hash){ return this.clickMsg.split('').reverse().join('') + hash }
    // }
  },
  components: { fircomponent }
}
// var unwatch = this.$watch('loaction', function(newValue, oldValue){
//   this.watchurl = newValue.protocal + '//' + newValue.host;
// },{
//   deep: true,
//   immediate: true
// });
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 14px;
}
h1, h2, h3, h4 { font-weight: normal; }
ul { list-style-type: none; padding: 0; }
li {  }
.link{ text-decoration: underline; }
.active{ color: #42b983; }
</style>
