<template>
  <div class="my-component">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data () {
    return {
      msg: 'this is from my-component.vue',
    }
  }
}
</script>

<style lang='scss' scoped>
.my-component{
  background: #000;
  color: #fff;
}
</style>