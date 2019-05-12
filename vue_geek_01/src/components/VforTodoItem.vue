<template>
    <li>
        {{ todo.title }}
        <button @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
export default {
    name: 'v-for-todo-item',
    props: {
      todo: Object
    }
}
</script>

<style scoped>

</style>
