<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data () {
    return {
      id: this.$route.params.id,
      blog: Object
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
      .then((response) => {
        this.blog = response.body
      })
  }
}
</script>

<style lang="scss" scoped>
#single-blog{
  max-width: 720px;
  margin: 0 auto;
}
</style>
