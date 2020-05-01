<template>
  <div class="containerLogin">
    <div class="headerLogin">
      <h1>Login</h1>
    </div>
    <div class="formLogin">
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
    </div>
    <div>
      <button @click="login">Sign In</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login(e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(`You are logged in as ${user.email}`);
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

</style>
