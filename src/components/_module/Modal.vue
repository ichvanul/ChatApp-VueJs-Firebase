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
      <div class="inputModal">
        <input type="file" accept="image/*" @change="save">
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
    <div class="currentLocation">
      <div style="max-width: 100%; margin: 0 auto; display: flex; align-items:
      center; justify-content: space-between">
            <div class="myCoordinate">
                <h1>My coordinates:</h1>
                <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
            </div>
            <div class="mapCoordinate">
                <h1>Map coordinates:</h1>
                <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
            </div>
        </div>
        <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:319.5px; height:180px; margin: 20px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        ></GmapMap>
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
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 7,
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
    handleDrag() {
      // get center and zoom level, store in localstorage
      const center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      const zoom = this.map.getZoom();
      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4),
      };
    },
  },
  created() {
    this.profile();
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center);
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then((coordinates) => {
          this.myCoordinates = coordinates;
        })
        .catch((error) => console.log(error));
    }
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      // eslint-disable-next-line radix
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => {
      this.map = map;
    });
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
  width: 430px;
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
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

.inputModal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.inputModal input {
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 500;
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
  padding: 5px 0 0 14px;
  display: flex;
  flex-direction: row;
}

.contentStatus h5 {
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  margin: 5px 0 0 15px;
}

.contentStatus img {
  width: 25px;
  height: 25px;
}

.emailStatus {
  background-color: white;
  padding: 10px 0 10px 10px;
  display: flex;
}

.emailStatus h5 {
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  margin: 5px 0 0 20px;
}

.emailStatus img {
  width: 25px;
  height: 25px;
}

.currentLocation {
  background-color: white;
  width: 100%;
  height: 100%;
}

.myCoordinate h1 {
  font-size: 15px;
  padding: 10px;
}

.mapCoordinate h1 {
  font-size: 15px;
  padding: 10px;
}
</style>
