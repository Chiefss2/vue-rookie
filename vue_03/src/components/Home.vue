<template>
  <div id="home">
    <h1>this is home</h1>

    <!-- 传值，:msg="msg"父亲传儿子 , @titleChange="updateTitle($event)"儿子传给父亲  -->
    <h5>{{ title }}</h5>
    <eg-props :msg="msg" @titleChange="updateTitle($event)" />

    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import EgProps from './EgProps.vue'

export default {
  name: 'home',
  components: {
    EgProps
  },
  data(){
    return{
      msg: 'this is father to son',
      title: 'this is title',
      users: Array
    }
  },
  methods:{
    updateTitle(newTitle){
      this.title = newTitle;
    }
  },
  created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
            this.users = data.body;
        })
  }
}
</script>

<style>
</style>
