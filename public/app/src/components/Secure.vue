<style lang="sass">
  .secure{
    height: 100%;

    .route-wrapper{
      height: calc(100% - 60px);
    }

    .sidebar{
      padding: 1em;
      width: 20%;
      float: left;
    }

    .content{
      width: 80%;
      float: left;
      padding: 2em;
    }

  }
</style>
<template>
  <div class="secure">
    <app-header :user-data="user"></app-header>
    <div class="route-wrapper">
      <div class="sidebar">
        <sidebar></sidebar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import Auth from './services/auth'
  import AppHeader from './Header.vue'
  import Sidebar from './Sidebar.vue'

  export default{

    ready() {
        console.log(Auth.getUser());
    },

    data() {
      return {
        user: Auth.getUser()
      }
    },

    components: {
      AppHeader,
      Sidebar
    },

    route: {
      canActivate() {
        return Auth.user.authenticated
      }
    }

  }
</script>
