<template>
  <div class="container-login">
    <div class="left-login">
      <div class="header-login">
        <h1>Sign in to yukChat!</h1>
      </div>
      <div class="form-login">
        <div class="form-email">
          <input id="email" type="text" v-model="email" placeholder="Your email">
        </div>
        <div class="form-password">
          <input id="password" type="password" v-model="password" placeholder="Your password">
        </div>
      </div>
      <div class="button-register">
        <p>Forgot Password</p>
      </div>
      <div class="button-login">
        <button @click="login">SIGN IN</button>
      </div>
    </div>
    <div class="right-login">
      <div class="header-right">
        <h1>Hello, Friend!</h1>
      </div>
      <div class="body-right">
        <p>Enter your personal details <br>
          and start journey with us
        </p>
      </div>
      <div class="button-register">
        <button><router-link class="router-link"
        to="/register">SIGN UP</router-link></button>
      </div>
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

<style lang="scss" scoped>
@font-face {
  font-family: airbnb;
  src: url('../assets/font/AirbnbCerealBold.ttf');
}

* {
  margin: 0;
  padding: 0;
  font-family: airbnb;
}

.container-login{
  display: flex;
  .left-login{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 100vh;
    .header-login{
      h1{
        margin: 30px;
        color: #303a52;
        font-size: 45px;
      }
    }
    .form-login{
      .form-email{
        margin: 10px;
        input{
          padding: 10px 20px;
          width: 500px;
          height: 30px;
          border-radius: 10px;
          border: 1px solid white;
          background-color: lightgray;
          outline: none;
        }
      }
      .form-password{
        margin: 10px;
        input{
          padding: 10px 20px;
          width: 500px;
          height: 30px;
          border-radius: 10px;
          border: 1px solid white;
          background-color: lightgray;
          outline: none;
        }
      }
    }
    .button-login{
      margin: 10px 20px 10px 20px;
      button{
        background-color: #303a52;
        color: #fc85ae;
        padding: 13px;
        width: 200px;
        border-radius: 20px;
        border: 1px solid white;
        outline: none;
        cursor: pointer;
      }
    }
    .button-register{
      margin: 20px;
      p{
        color: #303a52;
        .router-link{
          color: #303a52;
          text-decoration: none;
        }
      }
    }
  }
  .right-login{
    background-color: #303a52;
    color: #fc85ae;
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header-right{
      margin-bottom: 30px;
      h1{
        font-size: 45px;
      }
    }
    .body-right{
      p{
        font-size: 17px;
        text-align: center;
      }
    }
    .button-register{
      margin: 40px;
      button{
        background-color: #303a52;
        padding: 13px;
        width: 200px;
        border-radius: 20px;
        border: 1px solid #fc85ae;
        outline: none;
        cursor: pointer;
        .router-link{
          color: #fc85ae;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
