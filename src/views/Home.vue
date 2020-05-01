<template>
<div class="containerHome">
  <!-- <Modal/> -->
  <div class="containerSideHome">
    <div>
      <LeftSide/>
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
// import Modal from '../components/_module/Modal.vue';
// import Navbar from '../components/_module/Navbar.vue';

export default {
  name: 'Home',
  components: {
    // Navbar,
    // RightSidebar,
    // Modal,
    LeftSide,
    RightSide,
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
