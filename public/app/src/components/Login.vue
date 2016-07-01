<style lang="sass">
  .login-box{
    width: 30%;
    text-align: center;
    margin: 0 auto;

    .login-form{
      margin-top: 40px;
    }

  }

  h4{
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 20px;
    small{
      color: #0D47A1;
      font-weight: 300;
      font-size: 60%;
    }
  }

  button{
    margin-top: 20px;
  }

  .actions{
    margin-top: 30px;
    font-weight: 300;
  }

  .login-error{
    color: #C62828;
    margin-top: 50px;
  }
</style>
<template>
  <div class="valign-wrapper">
    <div class="valign">

      <div class="login-box">
        <div class="login-title">
          <h4>
            BILLOCEAN <br>
            <small>here to simplify your business</small>
          </h4>
        </div>

        <div class="login-error" v-show="loginError">
          <i class="material-icons">error</i> Credenziali non valide, riprova.
        </div>

        <div class="login-form">

          <div class="input-wrapper">
            <input type="email" name="email" v-model="user.email" placeholder="Email">
          </div>

          <div class="input-wrapper">
            <input type="password" name="password" v-model="user.password" placeholder="Password">
          </div>

          <button type="submit" :disabled="loginAttempt" v-on:click="login" class="btn btn-primary btn-extended">Accedi</button>

        </div>

        <div class="actions">
          <a href="#"><i class="material-icons">help_outline</i> Ho smarrito la mia password.</a> <br>
          <a href="#">Sono un nuovo utente.</a>
        </div>

      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
  import Auth from './services/auth';
  import {router} from '../main';

  export default {
    data() {
      return {
        loginError: false,
        loginAttempt: false,
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.loginAttempt = true;
        this.$http.post('/api/v1/auth/attempt', this.user).then(function(res){
          Auth.setUser(res.data.data);
          this.loginError = false;
          this.loginAttempt = false;
          router.go('secure')
        }, function(err){
          Auth.unsetUser();
          this.loginAttempt = false;
          this.loginError = true;
        })
      }
    }
  }
</script>
