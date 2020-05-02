<template>
  <div class="containerLogin">
    <div class="wallpaperLogin">
      <div class="bodyLogin">
        <div class="headerLogin">
          <h1>SIGN UP NOW</h1>
        </div>
        <div class="formLogin">
          <div class="formEmail">
            <label for="email">Email</label>
            <input id="email" type="text" v-model="email" placeholder="Email">
          </div>
          <div class="formPassword">
            <label for="password">Password</label>
            <input id="password" type="password" v-model="password" placeholder="Password">
          </div>
        </div>
        <div class="buttonLogin">
          <button @click="register">Sign Up</button>
        </div>
        <div class="buttonRegister">
          <p> Already have an account? <router-link class="routerLink"
          to="/login">Login</router-link> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register(e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(`Account created for ${user.email}`);
          this.$router.push('/home');
        },
        (err) => {
          console.log(err.message);
        });
      e.preventDefault();
    },
  },
};
</script>


<style scoped>
@font-face {
  font-family: airbnb;
  src: url('../assets/font/AirbnbCerealBold.ttf');
}

* {
  margin: 0;
  padding: 0;
  font-family: airbnb;
}

.containerLogin {
  background-image: url('../assets/img/wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wallpaperLogin {
  background-color: white;
  height: 500px;
  width: 1100px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(102,102,102,1);
  -moz-box-shadow: 0px 0px 20px 0px rgba(102,102,102,1);
  box-shadow: 0px 0px 20px 0px rgba(102,102,102,1);
}

.wallpaperLogin img {
  position: relative;
}

.bodyLogin {
  background-color: none;
  width: 300px;
  height: 300px;
}

.headerLogin {
  text-align: center;
}

.headerLogin h1 {
  color: #4dffff;
}

.formLogin label {
  display: block;
  text-align: center;
  padding: 25px 0 5px 0;
  color: #4dffff;
}

::placeholder { /* Most modern browsers support this now. */
   color: white;
}

.formLogin input {
  text-align: center;
  width: 300px;
  height: 30px;
  border-radius: 20px;
  background-color: #4dffff;
  outline: none;
  border: 1px solid white;
}

.buttonLogin {
  text-align: center;
  padding: 30px 0 5px 0;
}

.buttonLogin button {
  width: 150px;
  height: 25px;
  text-align: center;
  font-family: airbnb;
  color: white;
  font-weight: bolder;
  font-size: 14px;
  border-radius: 25px;
  border: 1px solid white;
  cursor: pointer;
  background-color: #4dffff;
  outline: none;
}

.buttonRegister {
  text-align: center;
}

.buttonRegister p {
  font-weight: bolder;
  font-size: 14px;
  padding: 15px 0;
}

.routerLink {
  text-decoration: none;
  color: #4dffff;
  cursor: pointer;
}
</style>
