<template>
  <div id="g-props">
    {{ propA }}
    <button @click="showAttrs">show the $attrs</button>
  </div>
</template>

<script>
export default {
  name: 'g-props',
  props: {
    // *****注意，所有prop会在一个组件实例创建之前进行验证*****
    // 基础的类型检查，null 和 undefinded会通过任何类型检查
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => {return {message: 'hello'}}
    },
    // 自定义验证函数
    propF: {
      validator: value => {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    showAttrs () {
      window.console.log(this.$attrs)
    }
  }
}
</script>

