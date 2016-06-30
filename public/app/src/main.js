import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
//Import components
import Login from './components/Login.vue'
//Router configuration
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter();
//Init the root component
var App = Vue.extend({});

router.map({
  '/': {
    component: Login
  }
});

router.start(App, '#app');
