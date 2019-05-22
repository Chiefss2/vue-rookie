<template>
    <li>
        <!-- <slot/> -->
        <input type="checkbox" v-model="checked">
        <slot name="id" v-bind="{id: todo.id}"/>
        <slot name="title" v-bind="{checked}"/>
        {{ todo.title }}
        <button @click="$emit('remove',todo.title)">Remove</button>
        <slot name="footer"/>
    </li>
</template>

<script>
export default {
    name: 'v-for-todo-item',
    props: {
        todo: Object
    },
    data () {
        return {
            checked: false
        }
    }
}
</script>

<style scoped>

</style>
