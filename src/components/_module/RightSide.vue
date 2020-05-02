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
    <div class="mapProfile">
      <img src="../../assets/img/map.png" alt="map">
    </div>
    <div class="attachProfile">
      <img src="../../assets/img/attach.png" alt="attach">
    </div>
  </div>

  <!-- Body -->
  <div class="contentChat">
    <div :class="[message.author==authUser.email?'bodySendChat':'bodyReceiveChat']"
    v-for="message in messages" :key="message">
        <div :class="[message.author==authUser.email?'messageSendChat':'messageReceiveChat']">
          <p> {{message.message}} </p>
        </div>
        <!-- <div :class="[message.author==authUser.email?'timeSendChat':'timeReceiveChat']">
          <p> {{message.author}} </p>
        </div> -->
    </div>
  </div>

  <!-- Footer -->
  <div class="containerFooter">
    <div class="emotFooter">
      <img src="../../assets/img/emot.png" alt="emoticon">
    </div>
    <div class="typeFooter">
      <input @keyup.enter="saveMessage" v-model="message" type="text"
      placeholder="Type a message...">
    </div>
    <div class="audioFooter">
      <img src="../../assets/img/audio.png" alt="record">
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import db from '../../firebase';

export default {
  name: 'RightSide',
  data() {
    return {
      message: null,
      messages: [],
      authUser: {},
    };
  },
  methods: {
    saveMessage() {
      // save to firestore
      db.collection('chat').add({
        message: this.message,
        author: this.authUser.email,
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authUser = user;
      } else {
        this.authUser = {};
      }
    });
    this.fetchMessage();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          next();
        } else {
          vm.$router.push('./login');
        }
      });
    });
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
  background: white;
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

.mapProfile img {
  margin: 15px 15px 15px 500px;
  width: 25px;
  height: 25px;
}

.attachProfile img {
  margin: 15px 0;
  width: 25px;
  height: 25px;
}

/* Body */
.contentChat {
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  background: red;
  height: 100%;
  background-image: url('../../assets/img/wallpaperchat.jpg');
}

.bodySendChat {
  display: flex;
}

.bodyReceiveChat {
  display: flex;
  justify-items: right;
  /* flex-direction: column; */
}

.messageSendChat {
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: #ccffeb;
  margin: 5px 50px;
  padding: 7px;
  display: flex;
}

.messageReceiveChat {
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: #ccffeb;
  margin: 5px 5px 5px 700px;
  padding: 7px;
  display: flex;
  justify-items: left;
}

.messageReceiveChat p {
  text-align: right;
}

.timeSendChat {
  display: block;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: white;
  margin: 5px 50px;
  padding: 7px;
  width: 100px;
}

.timeReceiveChat {
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: white;
  margin: 5px 5px 5px 700px;
  padding: 7px;
}

.timeSendChat p {
  font-size: 10px;
}

.timeReceiveChat p {
  font-size: 10px;
}

/* .photoSendChat img {
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
} */

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
  padding: 0 0 0 20px;
}

.audioFooter img {
  margin: 7px 0 0 12px;
  cursor: pointer;
}
</style>
