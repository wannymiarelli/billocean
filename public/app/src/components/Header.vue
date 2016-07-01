<style lang="sass">
  .app-header{
    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 60px;
    padding-left: 1em;
    background-color: #FFF;
    padding-right: 1em;

    .company{
      width: 40%;
      height: 100%;
      line-height: 60px;
      float: left;
    }

    .user-account{
      float: left;
      height: 100%;
      line-height: 60px;
      width: 60%;
      text-align: right;
    }

  }
</style>
<template>
  <div class="app-header">
    <div class="company">
      <i class="material-icons">business</i> MIARELLI SRL
    </div>

    <div class="user-account">
      <i class="material-icons">account_circle</i> {{userData.email}}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      userData: Object
    }
  }
</script>
