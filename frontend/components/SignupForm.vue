<template>
  <form
    class="form-signup"
    v-on:submit.prevent="validateAndSignUp(name, email, password)"
    novalidate
  >
    <h1 class="h3 mb-3 font-weight-normal text-center">
      Cadastrar
    </h1>

    <div class="form-group">
      <input
        @click="clearErrors"
        v-model="name"
        type="text"
        id="name"
        class="form-control"
        placeholder="Nome"
      >
      <span
        v-if="$v.name.$invalid && showErrors"
        class="text-danger"
      >
        <small>Digite um nome com no mínimo 4 letras</small>
      </span>
    </div>

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
        <small>Coloque sua senha</small>
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

    <div class="mb-2">
      <nuxt-link to="/login">
        Ja sou cadastrado
      </nuxt-link>
    </div>
    <button
      class="btn btn-lg btn-primary btn-block"
      type="submit"
    >
      Cadastrar
    </button>
    <p class="mt-3 text-muted text-center">© 2019-2020</p>
    <Loader :active="showLoader" />
  </form>
</template>
<script>
import { signUp } from '~/assets/js/services/auth'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
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
      return !this.$v.email.$invalid
      && !this.$v.password.$invalid
      && !this.$v.name.$invalid
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
    async validateAndSignUp(name, email, password) {
      if(this.formIsValid) {
        await this.callSignUp(name, email, password)
      } else {
        this.ShowErrors()
      }
    },
    async callSignUp(name, email, password) {
      this.showLoader = true

      try {
        await signUp({ name, email, password }, this.$auth)
        this.$router.push('dashboard')
      } catch (error) {
        this.$toast.error('Erro ao cadastrar, confirme seus dados.')
      }

      this.showLoader = false
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    name: {
      required,
      minLength: minLength(4),
    },
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
  .form-signup {
    position: relative;
  }
</style>
