<template>
  <div id="firapp">
    <h6>This is first component------<a href="#">written by {{ author }}</a></h6>
  </div>
</template>

<script>
    export default{
      name: 'firapp',
      data(){
        return{
          author: 'Chiefs'
        }
      },
      beforeCreate: function(){ console.log(' beforeCreate'); },
      created: function(){ console.log(' created'); },
      beforeMount: function(){ console.log(' beforeMount'); },
      mounted: function(){ console.log(' mounted'); },
      beforeUpdate: function(){ console.log(' beforeUpdate'); },
      updated: function(){ console.log(' updated'); },
      beforeDestory: function(){ console.log(' beforeDestory'); },
      destoryed: function(){ console.log(' destoryed'); }
    }
</script>

<style>

</style>
