<template>
  <div class="containerRightSidebar">
    <ul>
      <li>Nama</li>
      <li>Gambar</li>
      <li>Apapun</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RightSidebar',
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 25%;
  list-style: none;
  background: olive;
  justify-content: space-between;
  transform: translateX(100%);
}

ul.slide {
  transform: translateX(0)
}
</style>
