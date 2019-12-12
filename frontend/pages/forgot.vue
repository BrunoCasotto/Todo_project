<template>
  <div class="login-form">
    <div class="login-form__content shadow p-3">
      <ForgotForm />
    </div>
  </div>
</template>

<script>
import ForgotForm from '~/components/ForgotForm.vue'

export default {
  components: {
    ForgotForm
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
