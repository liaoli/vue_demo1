<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <input placeholder="请输入message" class="new-todo" v-model="message" @keyup.enter="sendMsgFn"/>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  data(){
    return{
      message:''
    }
  },
  methods: {
    sendMsgFn() {
      Bus.$emit('sendMsg', this.message)
      this.message = ''
    },
  },
}
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>