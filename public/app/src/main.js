import Vue from 'vue'
import VueRouter from 'vue-router'
//Import components
import Hello from './components/Hello.vue'
//Router configuration
Vue.use(VueRouter);
var router = new VueRouter();
//Init the root component
var App = Vue.extend({});

router.map({
  '/': {
    component: Hello
  }
});

router.start(App, '#app');
