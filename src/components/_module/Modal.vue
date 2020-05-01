<template>
<div class="containerModal">
  <div class="addModal">
    <div class="containerPhoto">
      <div class="photoModal">
        <img src="../../assets/img/ivan.jpg" alt="">
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
  z-index: 999;
  justify-content: center;
  align-items: center;
}

.addModal {
  width: 400px;
  height: 500px;
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
