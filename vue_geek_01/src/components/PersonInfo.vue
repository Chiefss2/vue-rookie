<template>
  <div id="person-info">
    <PersonPhoneInfo v-model="phoneInfo" :zip-code.sync="zipCode" />

    <PersonPhoneInfo 
      :phone-info="phoneInfo"
      @change="val => (phoneInfo = val)"
      :zip-code="zipCode"
      @update:zipCode="val => (zipCode = val)"
    />
    
    <p>父组件的phoneInfo:{{ phoneInfo.phone }}</p>
    <p>父组件的zipCode:{{ zipCode }}</p>
  </div>
</template>

<script>
import PersonPhoneInfo from './PersonPhoneInfo.vue'

export default {
  name: 'person-info',
  components: {
    PersonPhoneInfo
  },
  data() {
    return {
      phoneInfo: {
        phone: ""
      },
      zipCode: ""
    }
  }
}
</script>

<style>
</style>
