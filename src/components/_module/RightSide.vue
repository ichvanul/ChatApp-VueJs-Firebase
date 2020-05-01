<template>
<div class="containerRightSide">
  <!-- Header -->
  <div class="headerNavbar">
    <div class="photoProfile">
      <img src="../../assets/img/ivan.jpg" alt="photo-profile">
    </div>
    <div class="nameProfile">
      <h5>Ichvanul Yulizar Putra</h5>
    </div>
  </div>

  <!-- Body -->
  <div class="contentChat">
    <div class="bodySendChat" v-for="message in messages" :key="message">
      <!-- <div class="photoSendChat">
        <img src="../../assets/img/ivan.jpg" alt="photo-profile">
      </div> -->
      <div class="messageSendChat">
        <p> {{message.message}} </p>
      </div>
    </div>
    <div class="bodyReceiveChat">
      <div class="messageReceiveChat">
        <p>Hi juga </p>
      </div>
      <!-- <div class="photoReceiveChat">
        <img src="../../assets/img/ivan.jpg" alt="photo-profile">
      </div> -->
    </div>
  </div>

  <!-- Footer -->
  <div class="containerFooter">
    <div class="emotFooter">
      <img src="../../assets/img/emot.png" alt="emoticon">
    </div>
    <div class="typeFooter">
      <input @keyup.enter="saveMessage" v-model="message" type="text" placeholder="Type a message">
    </div>
    <div class="audioFooter">
      <img src="../../assets/img/audio.png" alt="record">
    </div>
  </div>
</div>
</template>

<script>
import db from '../../firebase';

export default {
  name: 'RightSide',
  data() {
    return {
      message: null,
      messages: [],
    };
  },
  methods: {
    saveMessage() {
      // save to firestore
      db.collection('chat').add({
        message: this.message,
        createdAt: new Date(),
      });
      this.message = null;
    },
    fetchMessage() {
      db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
        const allMessages = [];
        querySnapshot.forEach((doc) => {
          allMessages.push(doc.data());
        });
        this.messages = allMessages;
      });
    },
  },
  created() {
    this.fetchMessage();
  },
};
</script>

<style scoped>
@font-face {
  font-family: airbnb;
  src: url('../../assets/font/AirbnbCerealBold.ttf');
}

* {
  margin: 0;
  padding: 0;
}

/* Header */
.containerRightSide {
  background: orange;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 65vw;
}

.headerNavbar {
  background: #ccffeb;
  display: flex;
  padding: 10px;
  height: 8vh;
  border-left: 1px solid white;
}

.photoProfile {
  margin-left: 5px;
}

.photoProfile img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}

.nameProfile {
  margin: 0 15px;
}

.nameProfile h5 {
  margin: 15px 0;
  font-size: 17px;
  font-weight: 700;
  font-family: airbnb;
}

/* Body */
.contentChat {
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
}

.bodySendChat {
  background-color: aqua;
  display: flex;
}

.bodyReceiveChat {
  background-color: yellow;
  display: flex;
}

.messageSendChat {
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: white;
  margin: 5px 50px;
  padding: 7px;
}

.messageReceiveChat {
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: white;
  margin: 5px 5px 5px 700px;
  padding: 7px;
}

.photoSendChat img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.photoReceiveChat img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

/* Footer */
.containerFooter {
  display: flex;
  background-color: #ccffeb;
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 65vw;
}

.emotFooter {
  margin: 5px;
}

.emotFooter img {
  width: 40px;
  height: 40px;
  padding: 7px 0;
  cursor: pointer;
}

.typeFooter input {
  border-radius: 30px;
  height: 45px;
  width: 55vw;
  margin: 8px 0 0 12px;
  border: 1px solid white;
  outline: none;
}

.audioFooter img {
  margin: 7px 0 0 12px;
  cursor: pointer;
}
</style>
