import Vue from 'vue';
// import firebase from 'firebase';
import App from './App.vue';
import router from './router';
// import './firebaseInit';

Vue.config.productionTip = false;

// let app;
// firebase.auth().onAuthStateChanged(user => {
//   if (!app) {
//     app = new Vue({
//       router,
//       firebase,
//       render: (h) => h(App),
//     }).$mount('#app');
//   }
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
