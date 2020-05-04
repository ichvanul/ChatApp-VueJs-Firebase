<template>
<div class="containerLeftSide">
  <!-- Header -->
  <div class="headerNavbar">
    <div class="photoProfile">
      <img @click="$emit('containerModal')" :src="user[0].image" alt="photo-profile"
      v-if="photo==null">
      <img @click="$emit('containerModal')" :src="photo" alt="photo-profile" v-else>
    </div>
    <div class="newChat">
      <img src="../../assets/img/messaging.png" alt="new-chat">
    </div>
    <div class="logoutChat">
      <img @click="logout" src="../../assets/img/logout.png" alt="logout">
    </div>
  </div>
  <div class="bodyInput">
    <input type="text" placeholder="Search or start a new chat">
  </div>

  <!-- Body -->
  <div class="headerChat">
    <div class="bodyChat" v-for="chat in 15" :key="chat">
      <div class="photoChat">
        <img src="../../assets/img/profil.png" alt="">
      </div>
      <div class="contentChat">
        <div class="nameChat">
          <h5>Joseph Widyatama</h5>
        </div>
        <div class="chatChat">
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        </div>
      </div>
      <div class="timeChat">
        <h5>1.30 PM</h5>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import db from '../../firebase';

export default {
  name: 'LeftSide',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      email: firebase.auth().currentUser.email,
      user: [],
      photo: null,
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login');
      });
    },
    profile() {
      db.collection('user').where('email', '==', this.email).onSnapshot((querySnapshot) => {
        const myprofil = [];
        querySnapshot.forEach((doc) => {
          myprofil.push(doc.data());
        });
        this.user = myprofil;
      });
    },
  },
  created() {
    this.profile();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: airbnb;
  src: url('../../assets/font/AirbnbCerealBold.ttf');
}

/* Header */
.containerLeftSide {
  background: red;
  width: 35vw;
  height: 100%;
}

.headerNavbar {
  background: #4dffff;
  display: flex;
  padding: 10px;
  height: 8vh;
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

.newChat img {
  width: 30px;
  height: 30px;
  margin: 10px 0 0 300px;
  cursor: pointer;
}

.logoutChat img {
  width: 30px;
  height: 30px;
  margin: 10px 0 0 20px;
  cursor: pointer;
}

.headerChat {
  background: #ffffff;
  height: 92vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.bodyInput {
  background-color: #99ffff;
  border: 1px solid #e6fff5;
}

.bodyInput input {
  width: 420px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid white;
  margin: 10px 27px;
  outline: none;
  padding: 0 0 0 20px;
}

/* Body */
.bodyChat {
  display: flex;
  padding: 5px 25px;
  border-bottom: 1px solid #e6fff5;
}

.photoChat {
  background-color: white;
}

.photoChat img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-top: 5px;
  object-fit: cover;
  cursor: pointer;
}

.contentChat {
  padding: 10px 10px;
}

.nameChat h5 {
  font-size: 17px;
  font-weight: bolder;
  font-family: airbnb;
}

.chatChat h5 {
  font-size: 14px;
  font-weight: 400;
  font-family: sans-serif;
}

.timeChat {
  padding: 10px 10px;
}

.timeChat h5 {
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
}
</style>
