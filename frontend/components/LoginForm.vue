<template>
  <form
    class="form-signin"
    v-on:submit.prevent="validateAndSignIn(email, password)"
    novalidate
  >
    <h1 class="h3 mb-3 font-weight-normal text-center">
      Entrar
    </h1>

    <div class="form-group">
      <input
        v-model="email"
        type="email"
        id="email"
        class="form-control"
        placeholder="Email"
        @click="clearErrors"
      >
      <span
        v-if="$v.email.$invalid && showErrors"
        class="text-danger"
      >
        <small>Email inválido</small>
      </span>
    </div>

    <div class="form-group">
      <input
        v-model="password"
        type="password"
        id="password"
        class="form-control"
        placeholder="Senha"
        @click="clearErrors"
      >
      <span
        v-if="$v.email.$invalid && showErrors"
        class="text-danger"
      >
        <small>Coloque sua senha</small>
      </span>
    </div>

    <div class="mb-2">
      <nuxt-link to="/signup">
        Não sou cadastrado
      </nuxt-link>
    </div>

    <div class="form__controller">
      <Loader :active="showLoginLoader" />
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        Entrar
      </button>
    </div>

    <p class="mt-3 text-muted text-center">© 2019-2020</p>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Loader from '~/components/Loader.vue'

export default {
  components: {
    Loader,
  },
  data() {
    return {
      email: '',
      password: '',
      showErrors: false,
      showLoginLoader: false,
    }
  },
  computed: {
    formIsValid() {
      return !this.$v.email.$invalid && !this.$v.password.$invalid
    }
  },
  methods: {
    clearErrors() {
      this.showErrors = false
    },
    ShowErrors() {
      this.showErrors = true
    },
    validateAndSignIn(email, password) {
      if(this.formIsValid) {
        this.signIn(email, password)
      } else {
        this.ShowErrors()
      }
    },
    async signIn(email, password) {
      try {
        this.showLoginLoader = true
        await this.$auth.loginWith('local', {
          data: {
            email,
            password
          }
        })
      } catch (error) {
        this.$toast.error('Erro ao entrar. verifique email e senha.')
      }

      this.showLoginLoader = false
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-signin {
    position: relative;
  }
</style>
