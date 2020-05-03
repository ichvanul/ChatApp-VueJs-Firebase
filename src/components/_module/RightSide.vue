<template>
<div class="containerRightSide">
  <!-- Header -->
  <div class="headerNavbar">
    <div class="photoProfile">
      <img @click="$emit('containerModalProfile')" src="../../assets/img/profil.png"
      alt="photo-profile">
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
  background: #4dffff;
  display: flex;
  padding: 10px;
  height: 8vh;
  border-left: 1px solid white;
}

.photoProfile {
  margin-left: 15px;
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
  margin: 10px 15px 0 500px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.attachProfile img {
  margin: 10px 0 0px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

/* Body */
.contentChat {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: red;
  height: 76vh;
  background-image: url('../../assets/img/wallpaperchat.jpg');
  overflow-y: scroll;
}

.bodySendChat {
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
}

.bodyReceiveChat {
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  /* flex-direction: column; */
}

.messageSendChat p {
  display: flex;
}

.messageSendChat {
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  background-color: #ccffeb;
  margin: 5px 0;
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
  justify-content: left;
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
  background-color: #4dffff;
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 65vw;
}

.emotFooter {
  margin: 5px 0 0 10px;
}

.emotFooter img {
  width: 35px;
  height: 35px;
  padding: 5px 0 0;
  cursor: pointer;
}

.typeFooter input {
  border-radius: 30px;
  height: 45px;
  width: 55vw;
  margin: 8px 0 0 15px;
  border: 1px solid white;
  outline: none;
  padding: 0 0 0 20px;
}

.audioFooter img {
  margin: 15px 0 0 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
}
</style>
