<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-sm-4">
        <div class="seetings">
          <label>
            <h4>Set your Username :</h4>
          </label>
          <h2>{{setting}}</h2>

          <form @submit.prevent="settingConfig">
            <input v-model="settingData" placeholder="Enter your name..." />
            <button class="btn btn-primary settingBtn">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="card" style="width: 40rem;">
          <div class="card-title">Chat Application</div>
          <div class="card-body">
            <div class="chatMessages">
              <div class="chatData ml-3" v-for="(singleMsg, index) in messageData" :key="index">
                <div class="userName">
                  <b>{{singleMsg.sender}}</b>
                </div>
                <div class="userMessage">
                  <span>{{singleMsg.message}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <form @submit.prevent="send">
              <input
                class="msgInp"
                v-model="sendMessage.message"
                placeholder="Enter your Message..."
              />
              <button class="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settingData: null,
      setting: null,
      sendMessage: {
        message: "",
        sender: "",
      },
      messageData: [],
    };
  },

  methods: {
    send(e) {
      e.preventDefault();

      let data = {
        message: this.sendMessage.message,
        sender: this.sendMessage.sender,
      };
      this.$socket.emit("sendMessage", data);
      this.sendMessage.message = "";
    },

    settingConfig(e) {
      e.preventDefault();
      if (this.settingData !== null) {
        this.setting = this.settingData;
        this.sendMessage.sender = this.setting;
        this.settingData = null;
      } else {
        this.settingData = null;
        console.log("HI");
      }
    },
  },

  mounted() {
    this.sockets.subscribe("reciveMessage", (result) => {
      console.log(result);
      this.messageData.push(result);
    });
  },

  created() {
    this.sockets.subscribe("greetingMessage", (data) => {
      this.messageData.push(data);
    });
  },
};
</script>

<style>
.container {
  font-family: Georgia, "Times New Roman", Times, serif;
}
.card-title {
  text-align: center;
  font-size: 30px;
  color: darkblue;
  margin-top: 5px;
}
.chatMessages {
  overflow-y: scroll;
  height: 400px;
  width: 550px;
  background-color: black;
}

.chatData {
  color: white;
}

.card {
  box-shadow: 5px;
  position: relative;
  border: none !important;
}

.msgInp {
  width: 440px;
  height: 40px;
}

button.btn.btn-primary {
  height: 45px;
  width: 100px;
  margin-left: 5px;
}

button.btn.btn-primary.settingBtn {
  position: relative;
  width: 75px;
  height: 35px;
}

.seetings {
  position: relative;
  top: 80px;
}
</style>