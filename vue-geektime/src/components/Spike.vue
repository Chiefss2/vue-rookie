<template>
  <div id="spike">
    <button>立即购买</button>
    <p>秒杀倒计时：{{ now  }}</p>
    <button @click="start = !start">{{ start ? '停止' : '开始' }}</button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'spike',
  data(){
    return{
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start: false
    }
  },
  computed:{},
  watch:{
    start(){
      this.startClock()
    }
  },
  methods:{
    startClock(){
      clearInterval(this.timer)
      if(this.start){
        this.timer = setInterval(() => {
          this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        }, 1000)
      }
    }
  },
  mounted(){
    this.startClock()
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>
