<template>
  <div class="containerLogin">
    <div class="wallpaperLogin">
      <div class="headerLogo">
        <div class="bodyLogo">
          <img src="../assets/img/logo.png" alt="logo">
        </div>
        <div class="welcomeLogo">
          <p>Welcome to yukChat!</p>
        </div>
        <div class="sayLogo">
          <p>Simple & Easy Way <br>
            <span>to Connect with People</span></p>
        </div>
      </div>
      <div class="bodyLogin">
        <div class="headerLogin">
          <h1>SIGN UP NOW</h1>
        </div>
        <div class="formLogin">
          <div class="formFullname">
            <label for="fullname">Fullname</label>
            <input id="fullname" type="text" v-model="displayName" placeholder="Fullname">
          </div>
          <div class="formEmail">
            <label for="email">Email</label>
            <input id="email" type="text" v-model="email" placeholder="Email">
          </div>
          <div class="formNumber">
            <label for="number">Phone Number</label>
            <input id="number" type="text" v-model="number" placeholder="Number">
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
      displayName: '',
      email: '',
      password: '',
      number: '',
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
            .set({
              email: this.email,
              displayName: this.displayName,
              number: this.number,
              image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            })
            .catch((error) => {
              console.log('register failed', error);
            });
          console.log(`Congratulation ${user.displayName}, Your Register is Succes!`);
          this.$router.push('/login');
        },
        (err) => {
          console.log(err.message);
        });
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

.headerLogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0 100px 0 0;
  width: 400px;
  height: 400px;
}

.bodyLogo img {
  border-radius: 50%;
  background-color: white;
  object-fit: cover;
  height: 150px;
  width: 150px;
}

.welcomeLogo p {
  color: #4dffff;
  font-size: 35px;
  font-weight: bolder;
}

.sayLogo {
  margin: 25px 0;
}

.sayLogo p {
  color: black;
  text-align: center;
  font-size: 20px;
}

.sayLogo p span {
  color: #4dffff;
  text-align: center;
  font-size: 20px;
}

.wallpaperLogin img {
  position: relative;
}

.bodyLogin {
  background-color: white;
  width: 400px;
  height: 450px;
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
  padding: 15px 0 5px 0;
  color: #4dffff;
}

::placeholder { /* Most modern browsers support this now. */
   color: white;
}

.formLogin {
  text-align: center;
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

@media only screen and (max-width: 600px) {
  .containerLogin {
  display: none;
  }
}
</style>
