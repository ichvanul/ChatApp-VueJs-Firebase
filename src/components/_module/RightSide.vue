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
      <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="attachProfile">
      <i class="fas fa-paperclip"></i>
    </div>
  </div>

  <!-- Body -->
  <div class="contentChat">
    <div :class="[message.author==authUser.email?'bodySendChat':'bodyReceiveChat']"
    v-for="message in messages" :key="message">
      <div :class="[message.author==authUser.email?'messageSendChat':'messageReceiveChat']">
        <p> {{message.message}} </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="containerFooter">
    <div class="emotFooter">
      <i class="fas fa-smile-beam"></i>
    </div>
    <div class="typeFooter">
      <input @keyup.enter="saveMessage" v-model="message" type="text"
      placeholder="Type a message...">
    </div>
    <div class="audioFooter">
      <i class="fas fa-microphone"></i>
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

<style lang="scss" scoped>
@font-face {
  font-family: airbnb;
  src: url('../../assets/font/AirbnbCerealBold.ttf');
}

* {
  margin: 0;
  padding: 0;
}

/* Header */
.containerRightSide{
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 65vw;
  .headerNavbar{
    background: #303a52;
    display: flex;
    padding: 10px;
    height: 8vh;
    border-left: 1px solid white;
    .photoProfile {
      margin-left: 15px;
      img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .nameProfile{
      margin: 0 15px;
      h5{
        margin: 15px 0;
        font-size: 17px;
        font-weight: 700;
        font-family: airbnb;
        color: #fc85ae;
      }
    }
    .mapProfile{
      i{
        margin: 10px 15px 0 500px;
        font-size: 35px;
        cursor: pointer;
        color: #fc85ae;
      }
    }
    .attachProfile{
      i{
        margin: 10px 0 0 10px;
        font-size: 35px;
        cursor: pointer;
        color: #fc85ae;
      }
    }
  }
  /* Body */
  .contentChat{
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 76vh;
    background-image: url('../../assets/img/wallpaperchat.jpg');
    overflow-y: scroll;
    .bodySendChat{
      display: flex;
      justify-content: flex-start;
      padding: 0 20px;
      .messageSendChat{
        font-size: 14px;
        font-weight: 500;
        font-family: sans-serif;
        background-color: #fc85ae;
        margin: 5px 0;
        padding: 7px;
        display: flex;
        p{
          display: flex;
          color: #303a52;
        }
      }
    }
    .bodyReceiveChat{
      display: flex;
      justify-content: flex-end;
      padding: 0 20px;
      .messageReceiveChat {
        font-size: 14px;
        font-weight: 500;
        font-family: sans-serif;
        background-color: #fc85ae;
        margin: 5px 5px 5px 700px;
        padding: 7px;
        display: flex;
        justify-content: left;
        p {
          text-align: right;
          color: #303a52;
        }
      }
    }
  }
}

/* Footer */
.containerFooter {
  display: flex;
  background-color: #303a52;
  position: fixed;
  bottom: 0;
  height: 10vh;
  width: 65vw;
}

.emotFooter {
  margin: 5px 0 0 10px;
}

.emotFooter i {
  font-size: 35px;
  padding: 9px 0 0;
  cursor: pointer;
  color: #fc85ae;
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

.audioFooter i {
  margin: 15px 0 0 14px;
  color: #fc85ae;
  cursor: pointer;
  font-size: 35px;
}
</style>
