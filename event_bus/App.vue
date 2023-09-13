<template>
  <div class="app">
    <BaseB :uName="user1"></BaseB>
    <BaseB :uName="user2"></BaseB>
    <BaseB :uName="user3"></BaseB>
  </div>
</template>

<script>
// import BaseA from './components/BaseA.vue'
import BaseB from "./components/BaseB.vue";
// import BaseC from './components/BaseC.vue'
export default {
  data() {
    return {
      user1: "用户A",
      user2: "用户B",
      user3: "用户C",
    };
  },

  components: {
    // BaseA,
    BaseB,
    // BaseC
  },
};
</script>

<style>
</style>