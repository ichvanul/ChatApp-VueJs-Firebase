<template>
  <div class="containerModalProfile">
    <div class="addModal">
      <div class="closeModal">
        <img src="../../assets/img/close.png" alt="close">
      </div>
      <div class="containerPhoto">
        <div class="photoModal">
          <img src="../../assets/img/ivan.jpg" alt="photo">
        </div>
        <div class="nameModal">
          <h5>Ichvanul Yulizar Putra</h5>
        </div>
      </div>
      <div class="headerStatus">
        <div class="bodyStatus">
          <h5>Status and email</h5>
        </div>
        <div class="contentStatus">
          <h5>Please stay, forever with me.</h5>
        </div>
        <div class="emailStatus">
          <h5>ichvanulyp@gmail.com</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalProfile',
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
  align-items:center;
  justify-content: center;
  top: 0px;
  right: 0px;
}

.addModal {
  width: 440px;
  height: 75vh;
  position: relative;
  background: white;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 0;
  left: 0;
  top: 0;
}

.closeModal {
  background-color: #4dffff;
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
  background-color: tomato;
}

.bodyStatus h5 {
  font-size: 17px;
  font-family: sans-serif;
  color: #4dffff;
  font-weight: bolder;
  padding: 10px 0 0 10px;
}

.contentStatus {
  background-color: violet;
  padding: 10px 0 0 10px;
}

.contentStatus h5 {
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 400;
  margin-top: 5px;
}

.emailStatus h5 {
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 400;
}
</style>
