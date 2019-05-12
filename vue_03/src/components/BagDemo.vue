<template>
    <div>
        <!-- 图片 -->
        <div id="bag" :class="{ burst:ended }">{{ ended ? '我死了' : '' }}</div>

        <!-- 进度情况 -->
        <div id="bag-health">
            <div :style="{ width: health+'%' }"></div>
        </div>

        <!-- 控制按钮 -->
        <div id="control">
            <button @click="punch" v-show="!ended">使劲敲</button>
            <button @click="restore">重新开始</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            health: 100,
            ended: false
        }
    },
    methods: {
        punch: function(){ this.health -= 10; if(this.health <= 0){ this.ended = true; } },
        restore: function(){ this.health = 100; this.ended = false; }
    }
}
</script>

<style scoped>
#bag{
    width: 200px;
    height: 300px;
    background-color: crimson;
}
#bag.burst{
    background-color: rgb(194, 143, 153);
}
#bag-health{
    width: 200px;
    border: 2px solid #000;
    margin: 10px 0;
}
#bag-health div{
    height: 20px;
    background-color: crimson;
}
</style>