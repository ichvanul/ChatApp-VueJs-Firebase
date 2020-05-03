<template>
<div class="containerModal">
  <div class="addModal">
    <div class="closeModal">
      <img @click="$emit('closeProfile')" src="../../assets/img/close.png" alt="close">
    </div>
    <div class="containerPhoto">
      <div class="photoModal">
        <img :src="user[0].image" alt="photo">
      </div>
      <div>
        <input type="file" accept="image/*"
        @change="save">
      </div>
      <div class="nameModal">
        <h5>Ryan Hidayat</h5>
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
          <h5> ryanhidayat@gmail.com </h5>
        </div>
      </div>
      <div class="contentStatus">
        <div class="statusIcon">
          <img src="../../assets/img/phone.png" alt="">
        </div>
        <div class="statusData">
          <h5> 02188877163 </h5>
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
  name: 'Modal',
  data() {
    return {
      email: firebase.auth().currentUser.email,
      user: [],
      photo: null,
      imageData: null,
      picture: null,
    };
  },
  methods: {
    profile() {
      db.collection('user').where('email', '==', this.email).onSnapshot((querySnapshot) => {
        const myprofil = [];
        querySnapshot.forEach((doc) => {
          myprofil.push(doc.data());
        });
        this.user = myprofil;
      });
    },
    save(event) {
      // eslint-disable-next-line prefer-destructuring
      this.imageData = event.target.files[0];
      this.picture = null;
      const storageRef = firebase.storage().ref(`profil/${this.imageData.name}`).put(this.imageData);
      storageRef.on('state_changed', (snapshot) => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, (error) => { console.log(error.message); },
      () => {
        this.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url;
          firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
            .update({
              image: url,
            });
        });
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

.containerModal {
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 99;
  justify-content:left;
  align-items:center;
  visibility: hidden;
  opacity: 0;
  transition: linear 0.3s;
}

.containerModal-active {
  visibility: visible;
  opacity: 1;
  top: 0;
  left: 0;
  transition: linear 0.3s;
}

.addModal {
  width: 475px;
  height: 100vh;
  position: relative;
  background: white;
  display: flex;
  align-items: left;
  flex-direction: column;
  border-radius: 10px;
}

.closeModal {
  background-color: #4dffff;
  display: flex;
  justify-content: flex-end;
  border-top-right-radius: 10px;
}

.closeModal img {
  width: 20px;
  height: 20px;
  margin: 20px;
  cursor: pointer;
}

.photoModal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.photoModal img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.titleModal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nameModal {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 10px solid #4dffff;
}

.nameModal h5 {
  font-size: 30px;
  font-family: sans-serif;
  font-weight: 500;
  padding: 20px;
}

.headerStatus {
  background-color: white;
  border-bottom: 50px solid #4dffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.contentStatus {
  background-color: white;
  padding: 25px 0 0 14px;
  display: flex;
  flex-direction: row;
}

.contentStatus h5 {
  font-size: 25px;
  font-family: sans-serif;
  font-weight: 400;
  margin: 10px 0 0 15px;
}

.contentStatus img {
  width: 50px;
  height: 50px;
}

.emailStatus {
  background-color: white;
  padding: 25px 0 10px 10px;
  display: flex;
}

.emailStatus h5 {
  font-size: 25px;
  font-family: sans-serif;
  font-weight: 400;
  margin: 15px 0 0 20px;
}

.emailStatus img {
  width: 50px;
  height: 50px;
}
</style>
