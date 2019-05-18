<template>
  <div v-theme:bgc="'wide'" id="show-blogs">
    <h2>博客总览</h2>
    <input v-model="srchValue" type="text" placeholder="搜索博客...">
    <div v-for="(blog, idx) in filteredBlogs" :key="idx" class="single-blog">
      <router-link :to="'/blog/singleblog/' + blog.id">
        <h4 v-crimson>{{ blog.id }} - {{ blog.title | to-uppercase }}</h4>
      </router-link>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      blogs: [],
      srchValue: ''
      // filteredBlogs: Array
    }
  },
  created () {
    // Bomb获取一条数据
    // const query = Bmob.Query('post');
    // query.get('objectId').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // 查询所有数据
    const query = Bmob.Query('post')
    query.find().then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return Boolean(blog.title.match(this.srchValue))
      })
    }
  }
  // watch: {
  //   blogs: function (newBlogs, oldBlogs) {
  //     this.filteredBlogs = newBlogs
  //   },
  //   srchValue: function (newSrchValue, oldSrchValue) {
  //     this.filteredBlogs = this.blogs.filter((blog) => {
  //       return Boolean(blog.title.match(newSrchValue))
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#show-blogs{
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  *{
    box-sizing: border-box;
  }
  input{
    display: block;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    text-indent: 10px;
  }
  .single-blog{
    padding: 10px 15px 15px;
    margin-bottom: 10px;
    background-color: #eee;
  }
}
</style>
