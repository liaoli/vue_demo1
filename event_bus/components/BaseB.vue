<template>
  <div class="base-b">
    <div>{{uName}}</div>
    <input
      placeholder="请输入要发送的消息"
      class="new-todo"
      v-model="messageSend"
      @keyup.enter="sendMsgFn"
    />
    <button @click="sendMsgFn">发送消息</button>

    <ul>
      <li v-for="(item, index) in msg" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Bus from "../utils/EventBus";
export default {
  data() {
    return {
      messageSend: "",
      msg:[],
    };
  },

  props:{
    uName:{
      type:String
    }
  },

  created() {
    Bus.$on("sendMsg", (msg) => {
      this.msg.push(msg);
    });
  },

  methods: {
    sendMsgFn() {
      Bus.$emit("sendMsg", this.uName +':' +this.messageSend);
      this.messageSend = "";
    },
  },
};
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