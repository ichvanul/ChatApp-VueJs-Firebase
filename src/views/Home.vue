<template>
<div class="containerHome">
  <div class="containerSideHome">
    <div>
      <LeftSide @containerModal="showProfile"/>
      <Modal @closeProfile="closeProfile"/>
    </div>
    <div>
      <RightSide/>
    </div>
  </div>
  <div>
    <!-- <Navbar/> -->
    <!-- <RightSidebar/> -->
  </div>
</div>
</template>

<script>
import RightSide from '../components/_module/RightSide.vue';
import LeftSide from '../components/_module/LeftSide.vue';
import Modal from '../components/_module/Modal.vue';
// import Navbar from '../components/_module/Navbar.vue';

export default {
  name: 'Home',
  components: {
    // Navbar,
    // RightSidebar,
    Modal,
    LeftSide,
    RightSide,
  },
  methods: {
    showProfile() {
      document.querySelector('.containerModal').classList.add('containerModal-active');
    },
    closeProfile() {
      document.querySelector('.containerModal').classList.remove('containerModal-active');
    },
  },

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.containerSideHome {
  display: flex;
  flex-direction: row;
}
</style>
