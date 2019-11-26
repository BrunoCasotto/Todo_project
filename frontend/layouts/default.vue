<template>
  <div class="main">
    <Header />
    <div class="main__content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
@import '~assets/sass/vars';
.main {
  background-image: $linear-background;

  &__content {
    width: 100%;
    min-height: calc(100vh - #{$header-height});
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
