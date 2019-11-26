<template>
  <div class="login-form">
    <div class="login-form__content shadow p-3">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';

 .login-form {
   width: 100%;
   padding: 20px;

   &__content {
     background: $translucid-color;
     border-radius: 8px;
     max-width: 300px;
     margin: 0 auto;
   }
 }
</style>
