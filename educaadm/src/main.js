import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase  from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBqYDl9R3OOBMUAqfnPcqz6uILztYUWY8k",
  authDomain: "project-f2368.firebaseapp.com",
  databaseURL: "https://project-f2368.firebaseio.com",
  projectId: "project-f2368",
  storageBucket: "project-f2368.appspot.com",
  messagingSenderId: "582357917478",
  appId: "1:582357917478:web:ba45fb0dc578e581"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
