<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submited">
        <label for="">博客标题</label>
        <input v-model="blog.title" type="text" name="" id="" />
        <label for="">博客内容</label>
        <textarea v-model="blog.content" name="" id="" cols="30" rows="10"></textarea>
        <div id="blog-categories">
            <p>博客分类：</p>
            <label>vue.js</label>
            <input v-model="blog.categories" type="checkbox" name="" id="" value="vue.js">
            <label>node.js</label>
            <input v-model="blog.categories" type="checkbox" name="" id="" value="node.js">
            <label>react.js</label>
            <input v-model="blog.categories" type="checkbox" name="" id="" value="react.js">
            <label>angular.js</label>
            <input v-model="blog.categories" type="checkbox" name="" id="" value="angular.js">
        </div>
        <label>作者：</label>
        <select v-model="blog.author">
            <option v-for="(author, idx) in authors" :key="idx">{{ author }}</option>
        </select>
        <button @click.prevent="postBlogInfo" type="submit">发布博客</button>
    </form>

    <div v-if="submited">博客已经成功发布！！</div>

    <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{ blog.title }}</p>
        <p>博客内容：{{ blog.content }}</p>
        <p>博客分类：</p>
        <ul>
            <li v-for="(category, idx) in blog.categories" :key="idx">{{ category }}</li>
        </ul>
        <p>博客作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['chiefs', 'fone', 'bucky'],
      submited: false
    }
  },
  methods: {
    postBlogInfo () {
      const query = Bmob.Query('post')
      query.set('title', this.blog.title)
      query.set('content', this.blog.content)
      query.set('categories', this.blog.categories)
      query.set('author', this.blog.author)
      query.save().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      this.submited = true
    }
  }
}
</script>

<style lang="scss" scoped>
#add-blog{
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;

  * {
    box-sizing: border-box
  }

  h2 {
    text-align: center
  }

  label {
    display: block;
    margin: 20px 0 10px
  }

  input[type="text"], textarea, select {
    display: block;
    width: 100%;
    padding: 8px
  }

  button {
    display: block;
    width: 100%;
    margin: 20px 0;
    color: #fff;
    background-color: crimson;
    padding: 15px;
    border: 0 none;
    border-radius: 3px;
    cursor: pointer
  }

  #blog-categories {
    margin-top: 20px;
    label {
      display: inline-block;
      margin-top: 0;
    }
    input {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>
