<template>
<div class="containerHome">
  <div class="containerSideHome">
    <div>
      <LeftSide @containerModal="showProfile"/>
      <Modal @closeProfile="closeProfile"/>
    </div>
    <div>
      <RightSide @containerModalProfile="showStatus"/>
      <ModalProfile @closeStatus="closeStatus"/>
    </div>
  </div>
</div>
</template>

<script>
import RightSide from '../components/_module/RightSide.vue';
import LeftSide from '../components/_module/LeftSide.vue';
import Modal from '../components/_module/Modal.vue';
import ModalProfile from '../components/_module/ModalProfile.vue';

export default {
  name: 'Home',
  components: {
    ModalProfile,
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
    showStatus() {
      document.querySelector('.containerModalProfile').classList.add('containerModalProfile-active');
    },
    closeStatus() {
      document.querySelector('.containerModalProfile').classList.remove('containerModalProfile-active');
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
