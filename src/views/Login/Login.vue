<template>
  <div class="login flex-column">
      <div class="pic">
          <img src="@/assets/feidian.png" alt="">
      </div>
      <login-form></login-form>
      <div class="nav">
          <router-link to="/user/register">注册</router-link> | <router-link to="/system/home">游客</router-link>
      </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm';

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>

<style>
.login {
    align-items: center;
}

.login .pic {
    margin-top: 15%;
    width: 65%;
}

.login .pic img {
    width: 100%;
    height: 100%;
}

.nav {
    font-size: 1.2rem;
}

.nav a {
    color: #072b4e;
}
</style>