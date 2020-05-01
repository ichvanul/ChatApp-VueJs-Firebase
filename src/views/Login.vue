<template>
    <div>
        <h3>Please login with your google account to continue</h3>

        <button @click="login">Login with Google Account</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      firebase.auth().signInWithPopup(provider).then((result) => {
        const token = result.credential.accessToken;
        const { user } = result;

        this.$router.push('/');
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const { email } = error;
          const { credential } = error;
        });
    },
  },
};
</script>

<style scoped>

</style>
