<template>
  <div class="main">
    <Navbar v-if="isLogged"/>
    <Header v-else />
    <div class="main__content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Navbar from '~/components/Navbar.vue'
import "font-awesome/css/font-awesome.css"

export default {
  components: {
    Header,
    Navbar,
  },
  computed: {
    isLogged() {
      return this.$auth.loggedIn
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/vars';
.main {
  background-image: $linear-background;

  &__content {
    width: 100%;
    min-height: calc(100vh - #{$header-height});
  }
}
</style>
