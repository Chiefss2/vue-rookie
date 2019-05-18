<template>
  <div id="directive">
    this is directive component
    <button @click="show = !show">销毁</button>
    <button v-if="show" @click="number++" v-append-text="`hello ${number}`">按钮</button>
  </div>
</template>

<script>
const log = window.console.log

export default {
  beforeCreate(){
    log('beforeCreate')
  },
  created(){
    log('created')
  },
  beforeMount(){
    log('beforeMount')
  },
  mounted(){
    log('mounted')
  },
  beforeUpdate(){
    log('beforeUpdate')
  },
  updated(){
    log('updated')
  },
  beforeDestroy(){
    log('beforeDestroy')
  },
  destroyed(){
    log('destroy')
  },
  data(){
    return{
      number: 1,
      show: true
    }
  },
  // 局部指令
  directives: {
    appendText:{
      // 只调用一次，指令绑定元素时调用
      bind(){
        log('d-bind')
      },
      // 被绑定元素插入父节点时调用（仅仅保证父节点存在，但不一定已被插入文档中）
      inserted(el, binding){
        el.appendChild(document.createTextNode(binding.value))
        log('d-inserted', el, binding)
      },
      // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
      update(){
        log('d-update')
      },
      // 指令所在组件的VNode及其子VNode全部更新后调用
      componentUpdated(el, binding){
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        log('d-componentUpdated')
      },
      // 只调用一次，指令与元素解绑时调用
      unbind(){
        log('d-unbind')
      }
    }
  }
}
</script>
