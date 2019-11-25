<template>
  <div class="login-form text-center">
    <div class="login-form__content shadow-none p-3 mb-5 bg-light rounded">
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
 .login-form {
    min-width: 300px;
 }
</style>
