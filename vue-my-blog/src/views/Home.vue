<template>
  <div class="home">
    <!-- <AddBlog></AddBlog> -->
    <ShowBlogs></ShowBlogs>
  </div>
</template>

<script>
// @ is an alias to /src
// import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'

export default {
  name: 'home',
  components: {
    // AddBlog,
    ShowBlogs
  }
}
</script>
