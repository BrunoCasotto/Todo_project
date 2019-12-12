<template>
  <form
    class="form-reset"
    v-on:submit.prevent="validateAndResetPassword(password)"
    novalidate
  >
    <h1 class="h3 mb-3 font-weight-normal text-center">
      Redefinir sua senha
    </h1>

    <div class="form-group">
      <input
        @click="clearErrors"
        v-model="password"
        type="password"
        id="password"
        class="form-control"
        placeholder="Senha"
      >
      <span
        v-if="$v.password.$invalid && showErrors"
        class="text-danger"
      >
        <small>Coloque a nova senha</small>
      </span>
    </div>

    <div class="form-group">
      <input
        @click="clearErrors"
        v-model="confirmPassword"
        type="password"
        id="confirm-password"
        class="form-control"
        placeholder="Confirmar a senha"
      >
      <span
        v-if="$v.confirmPassword.$invalid && showErrors"
        class="text-danger"
      >
        <small>Senha não confere</small>
      </span>
    </div>

    <button
      class="btn btn-lg btn-primary btn-block"
      type="submit"
    >
      Redefinir
    </button>
    <p class="mt-3 text-muted text-center">© 2019-2020</p>
    <Loader :active="showLoader" />
  </form>
</template>
<script>
import { resetPassword } from '~/assets/js/services/auth'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import Loader from '~/components/Loader.vue'

export default {
  components: {
    Loader,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      showErrors: false,
      showLoader: false,
    }
  },
  computed: {
    formIsValid() {
      return!this.$v.password.$invalid
      && !this.$v.confirmPassword.$invalid
    }
  },
  methods: {
    clearErrors() {
      this.showErrors = false
    },
    ShowErrors() {
      this.showErrors = true
    },
    async validateAndResetPassword(password) {
      if(this.formIsValid) {
        const { token, email } = this.$route.query
        await this.callResetPassword(password, token, email)
      } else {
        this.ShowErrors()
      }
    },
    async callResetPassword(password, token, email) {
      this.showLoader = true

      try {
        await resetPassword({ password, token, email }, this.$axios)
        this.$router.push('login')
      } catch (error) {
        this.$toast.error('Erro resetar sua senha, confirme o periodo de expiração do token')
      }

      this.showLoader = false
    },
  },
  validations: {
    password: {
      required,
    },
    confirmPassword: {
      required,
      sameAs: sameAs('password')
    }
  }
}
</script>

<style>
  .form-reset {
    position: relative;
  }
</style>
