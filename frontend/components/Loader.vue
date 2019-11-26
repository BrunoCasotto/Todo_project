<template>
<div v-if="active" class="loader-overlay">
  <div class="loader-overlay__content">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Carregando...</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/vars';

.loader-overlay {
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: $translucid-color;

  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>