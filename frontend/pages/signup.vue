<template>
  <div class="signup-form">
    <div class="signup-form__content shadow p-3">
      <SignupForm />
    </div>
  </div>
</template>

<script>
import SignupForm from '~/components/SignupForm.vue'
export default {
  auth: false,
  components: {
    SignupForm
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';

.signup-form {
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