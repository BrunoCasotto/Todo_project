<template>
  <div class="login-form">
    <div class="login-form__content shadow p-3">
      <ResetPasswordForm />
    </div>
  </div>
</template>

<script>
import ResetPasswordForm from '~/components/ResetPasswordForm.vue'

export default {
  auth: false,
  middleware: 'preventLogged',
  components: {
    ResetPasswordForm
  },
  auth: false
}
</script>

<style lang="scss">
@import '~assets/sass/vars';

.login-form {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background: $translucid-color;
    border-radius: 8px;
    min-width: 300px;
    margin: 0 auto;
  }
}
</style>
