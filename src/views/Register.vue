<template>
  <div class="containerRegister">
    <div class="headerRegister">
      <h1>Creater your account!</h1>
    </div>
    <div class="formRegister">
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
    </div>
    <div>
      <button @click="register">Sign Up</button>
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
* {
  margin: 0;
  padding: 0;
}
</style>
