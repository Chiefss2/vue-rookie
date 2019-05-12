<template>
    <p @click="changeTitle()">{{ msg }}</p>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        msg:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            title: 'title was changed'
        }
    },
    methods: {
        changeTitle(){
            // titleChange是注册的事件名称, 后面的是传给父亲组件的值
            this.$emit("titleChange", "this is son to father")
        }
    }
}
</script>

<style scoped>

</style>


