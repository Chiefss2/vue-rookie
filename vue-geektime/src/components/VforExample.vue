<template>
  <div id="vfor-example">
    <h5>{{ msg }}</h5>
    <div id="todo-list-example">
      <!-- 提交事件不再重载页面 -->
      <form @submit.prevent="addNewTodo">
        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <!-- <div v-on:click.self="doThat">...</div> -->

        <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
        <!-- 而不会等待 `onScroll` 完成  -->
        <!-- 这其中包含 `event.preventDefault()` 的情况 -->
        <!-- <div v-on:scroll.passive="onScroll">...</div> -->

        <label for="new-todo">Add a todo</label>
        <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat">
        <button>Add</button>
      </form>
    </div>
    <ul>
      <VforTodoItem 
        v-for="(todo,index) in todos" 
        :key="index" 
        :todo="todo" 
        @remove="delItem"
      >
        <!-- <span>this is default slot</span> -->
        <template v-slot:id="props">
          <span>{{props.id}}</span>
        </template>
        <template v-slot:title="props">
          <i :style="{color: props.checked ? 'red' : 'blue'}">（this is title slot）</i>
        </template>
        <template v-slot:footer>
          <span>（this is footer slot）</span>
        </template>
      </VforTodoItem>
    </ul>
  </div>
</template>

<script>
// v-for
import VforTodoItem from './VforTodoItem.vue';

export default {
  name: 'vfor-example',
  props: {
    msg: String
  },
  components:{
    VforTodoItem
  },
  data(){
    return{
      todos: [
        { id: 1, title: 'Do the dishes', },
        { id: 2, title: 'Take out the trash', },
        { id: 3, title: 'Mow the lawn' }
      ],
      newTodoText: '',
      newTodoId: 4
    }
  },
  methods:{
    addNewTodo(){
      this.todos.push({
        id: this.newTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    },
    delItem (propTitle) {
      const index = this.todos.findIndex(todo => todo.title === propTitle)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5{ font-weight: normal }
li {
  list-style: none;
}
</style>
