<template>
    <div>
        <!-- computed计算属性 -->
        <h5>les-02 - {{ title }}</h5>
        <button @click="a++">Add to A</button>
        <p>A - {{ a }}</p>
        <p>Age + A = {{ addtoa }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: "computed计算属性",
            a: 0,
            b: 0,
            age: 0
        }
    },
    computed: {
      addtoa: function() {
        return this.a+this.age;
      }
    }
}
</script>

<style scoped>

</style>


