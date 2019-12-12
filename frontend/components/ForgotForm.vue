<template>
  <form
    class="form-forgot"
    v-on:submit.prevent="validateAndSendEmail(email)"
    novalidate
  >
    <h1 class="h3 mb-3 font-weight-normal text-center">
      Recuperar senha
    </h1>

    <div class="form-group">
      <input
        @click="clearErrors"
        v-model="email"
        type="email"
        id="email"
        class="form-control"
        placeholder="Email"
      >

      <span
        v-if="$v.email.$invalid && showErrors"
        class="text-danger"
      >
        <small>Email inválido</small>
      </span>
    </div>

    <button
      class="btn btn-lg btn-primary btn-block"
      type="submit"
    >
      Enviar
    </button>
    <p class="mt-3 text-muted text-center">© 2019-2020</p>
    <Loader :active="showLoader" />
  </form>
</template>
<script>
import { sendResetPasswordEmail } from '~/assets/js/services/auth'
import { required, email } from 'vuelidate/lib/validators'
import Loader from '~/components/Loader.vue'

export default {
  components: {
    Loader,
  },
  data() {
    return {
      email: '',
      showErrors: false,
      showLoader: false,
    }
  },
  computed: {
    formIsValid() {
      return !this.$v.email.$invalid
    }
  },
  methods: {
    clearErrors() {
      this.showErrors = false
    },
    ShowErrors() {
      this.showErrors = true
    },
    async validateAndSendEmail(email) {
      if(this.formIsValid) {
        await this.callSendResetPasswordEmail(email)
      } else {
        this.ShowErrors()
      }
    },
    async callSendResetPasswordEmail(email) {
      this.showLoader = true

      try {
        await sendResetPasswordEmail({ email }, this.$axios)
        this.$toast.success('Email enviado com sucesso!')

        setTimeout(() => {
          this.$router.push('login')
        }, 3000)
      } catch (error) {
        this.$toast.error('Erro ao enviar o email, tente novamente.')
      }

      this.showLoader = false
    },
  },
  validations: {
    email: {
      required,
      email,
    }
  }
}
</script>

<style>
  .form-forgot {
    position: relative;
  }
</style>
