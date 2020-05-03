<template>
  <div class="containerModalProfile">
    <div class="addModal" v-for="data in myData" :key="data">
      <div class="closeModal">
        <img @click="$emit('closeStatus')" src="../../assets/img/close.png" alt="close">
      </div>
      <div class="containerPhoto">
        <div class="photoModal">
          <img src="../../assets/img/profil.png" alt="photo">
        </div>
        <div class="nameModal">
          <h5> {{data.displayName}} </h5>
        </div>
      </div>
      <div class="headerStatus">
        <div class="contentStatus">
          <div class="statusIcon">
            <img src="../../assets/img/about.png" alt="">
          </div>
          <div class="statusData">
            <h5> I am busy </h5>
          </div>
        </div>
        <div class="emailStatus">
          <div class="emailIcon">
            <img src="../../assets/img/email.png" alt="">
          </div>
          <div class="emailData">
            <h5> {{data.email}} </h5>
          </div>
        </div>
        <div class="contentStatus">
          <div class="statusIcon">
            <img src="../../assets/img/phone.png" alt="">
          </div>
          <div class="statusData">
            <h5> {{data.number}} </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '../../firebase';

export default {
  name: 'ModalProfile',
  data() {
    return {
      myData: [],
    };
  },
  methods: {
    getMyData() {
      // eslint-disable-next-line no-undef
      db.collection('user').where('email', '==', firebase.auth().currentUser.email).onSnapshot((querySnapshot) => {
        const myProfile = [];
        querySnapshot.forEach((doc) => {
          myProfile.push(doc.data());
        });
        this.myData = myProfile;
        console.log(myProfile);
      });
    },
  },
  created() {
    this.getMyData();
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

.containerModalProfile {
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 99;
  align-items: center;
  justify-content: center;
  top: 0px;
  right: 0px;
  visibility: hidden;
  opacity: 0;
  transition: linear 0.3s;
}

.containerModalProfile-active {
  visibility: visible;
  opacity: 1;
  transition: linear 0.3s;
  top: 0;
}

.addModal {
  width: 350px;
  height: 60vh;
  position: relative;
  background: white;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 0;
  left: 0;
  top: 0;
  border-radius: 10px;
}

.closeModal {
  background-color: #4dffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.closeModal img {
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 10px;
}

.containerPhoto {
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-bottom: 10px solid #4dffff;
}

.photoModal {
  padding: 10px 0 0 0;
}

.photoModal img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
}

.nameModal h5 {
  font-size: 17px;
  font-weight: bolder;
  font-family: sans-serif;
  padding: 10px;
}

.headerStatus {
  background-color: white;
  border-bottom: 10px solid #4dffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.contentStatus {
  background-color: white;
  padding: 10px 0 0 14px;
  display: flex;
  flex-direction: row;
}

.contentStatus h5 {
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 400;
  margin-top: 5px;
  margin: 5px 0 0 15px;
}

.contentStatus img {
  width: 35px;
  height: 35px;
}

.emailStatus {
  background-color: white;
  padding: 10px 0 10px 10px;
  display: flex;
}

.emailStatus h5 {
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 400;
  margin: 12px 0 0 15px;
}

.emailStatus img {
  width: 40px;
  height: 40px;
}
</style>
