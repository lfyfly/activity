<template>
  <div class="vue">
    <h3>{{msg}}</h3>
    <my-component/>
  </div>
</template>

<script>
import myComponent from './components/my-component.vue'
export default {
  name: 'vue',
  components:{
    myComponent
  },
  data () {
    return {
      msg: 'this is from vue.vue',
    }
  }
}
</script>

<style lang='scss' scoped>
.vue{
  
}
</style>