<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="scss">
 #app{
        height:100%;
        >div{
            height: 100%;
        }
    }
    .boxShadow{box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);}
</style>
