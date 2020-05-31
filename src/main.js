import Vue from 'vue';
import firebase from 'firebase';
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
// import './firebaseInit';

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBs58h3su-i3H582rjuCuY5LRWNjpCJhPg',
  },
});

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app');
