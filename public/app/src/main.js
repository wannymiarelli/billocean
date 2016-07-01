import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
//Import components
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'
import Dashboard from './components/Dashboard.vue'
import ContactList from './components/ContactList.vue'
//Router configuration
Vue.use(VueRouter);
Vue.use(VueResource);
export var router = new VueRouter();
//Init the root component
var App = Vue.extend({});

router.map({
  '/': {
    component: Login
  },
  '/secure': {
    component: Secure,
    subRoutes: {
      '/dashboard': {
        component: Dashboard
      },
      '/contacts': {
        component: ContactList
      }
    }
  }
});

router.start(App, '#app');
