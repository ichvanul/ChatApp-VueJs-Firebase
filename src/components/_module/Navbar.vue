<template>
  <div>
    <nav>
      <div class="menuToogle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="logo">
        <h4>Ini navbar</h4>
      </div>

      <ul>
        <li>Nama</li>
        <li>Gambar</li>
        <li>Apapun</li>
      </ul>

      <div class="menuToogle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {

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

nav {
  display: flex;
  background-color: blue;
  justify-content: space-around;
  padding: 15px 0;
  color: white;
  z-index: 999;
  position: relative;
}

nav ul {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 25%;
  list-style: none;
  background: blue;
  justify-content: space-evenly;
  z-index: -999;
  transform: translateX(100%);
}

nav ul li {
  text-decoration: none;
}

/* Menu Hamburger */
.menuToogle {
  display: flex;
  flex-direction: column;
  height: 20px;
  background-color: violet;
  justify-content: space-between;
  position: relative;
}

.menuToogle input {
  position: absolute;
  width: 50px;
  height: 30px;
  left: -11px;
  top: -3px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.menuToogle span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s;
}

/* Menu Hamburger Animation */
.menuToogle span:nth-child(2) {
  transform-origin: 0 0;
}

.menuToogle span:nth-child(4) {
  transform-origin: 0 100%;
}

.menuToogle input:checked ~ span:nth-child(2) {
  transform: rotate(45deg) translate(-1px, -1px);
  background-color: white;
}

.menuToogle input:checked ~ span:nth-child(4) {
  transform: rotate(-45deg) translate(-1px, 0);
  background-color: white;
}

.menuToogle input:checked ~ span:nth-child(3) {
  transform: scale(0);
  opacity: 0;
}
@media screen {

}
</style>
