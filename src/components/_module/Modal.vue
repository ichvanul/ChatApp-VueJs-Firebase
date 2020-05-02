<template>
<div class="containerModal">
  <div class="addModal">
    <div class="containerPhoto">
      <div class="closeModal">
        <img @click="$emit('closeProfile')" src="../../assets/img/close.png" alt="close">
      </div>
      <div class="photoModal">
        <img src="../../assets/img/ivan.jpg" alt="photo">
      </div>
      <div class="titleModal">
        <h5>Name</h5>
      </div>
      <div class="nameModal">
        <h5>Ichvanul Yulizar Putra</h5>
      </div>
    </div>
    <div class="statusModal">
      <h5>Please stay, forever with me.</h5>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
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
  opacity: 0;
  transition: linear 0.5s;
}

.containerModal-active {
  visibility: visible;
  opacity: 1;
  top: 0;
  left: 0;
  transition: linear 0.3s;
}

.addModal {
  width: 435px;
  height: 100vh;
  position: relative;
  background: white;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
}

.photoModal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photoModal img {
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 50%;
}

.closeModal img {
  width: 20px;
  height: 20px;
  margin: 10px 0 0 420px;
  cursor: pointer;
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
}
</style>
