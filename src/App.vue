<template>
  <div class="App">
    <div class="box" @click="fn">vue.js app</div>
  </div>
</template>

<script>
export default{
  created(){
    console.log('I am created')
  },
  methods:{
    fn(){
      alert('hello')
    }
  }

}
</script>

<style lang="less">
.App{
  width: 400px;
  height: 400px;
  background-color: pink;
  .box{
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}
}

</style>