<template>
  <div id="person-phone-info">
    <input 
      type="number"
      :value="phoneInfo.phone"
      @input="handlePhoneChange"
    />
    <input
      type="number"
      :value="zipCode"
      @input="handleCodeChange"
    />
    <p>子组件的phoneInfo:{{ phoneInfo.phone }}</p>
    <p>子组件的zipCode:{{ zipCode }}</p>
  </div>
</template>

<script>
import { _debounce, _throttle } from '@/utils/public.js'

export default {
  name: 'person-phone-info',
  model: {
    prop: "phoneInfo", // 默认 value
    event: "change" // 默认 input
  },
  props: {
    phoneInfo: Object,
    zipCode: String
  },
  data(){
    return{
      phoneRegExp: /^1{1}\d{10}$/g
    }
  },
  watch: {
    // 使用watch实现_debounce
    // deep: true,
    // phoneInfo(newVal, oldVal){
    //   clearTimeout(this.timer);
    //   this.timer = setTimeout(() => {
    //     this.$emit("change", {
    //       ...this.phoneInfo,
    //       phone: e.target.value
    //     });
    //     this.validator(e.target.value);
    //   }, 500)
    // }
  },
  methods: {
    validator(value){
      if(!this.phoneRegExp.test(value)){
        window.console.log('请输入11位数字组成的电话号码')
      }
    },
    // _debounce
    handlePhoneChange: _debounce(function(e){
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value
      });
      this.validator(e.target.value);
    }, 500),
    // _throttle
    handleCodeChange: _throttle(function(e){
      this.$emit("update:zipCode", e.target.value)
    }, 500)
  }
}
</script>

<style lang="scss" scoped>

</style>
