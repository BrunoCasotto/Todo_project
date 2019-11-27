<template>
  <div class="home-page">
    <div class="home-page__content text-center">
      <h4 class="mb-4">
        Dashboard here
      </h4>
       task list
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~assets/sass/vars';

 .home-page {
   width: 100%;
   padding: 20px;

   &__content {
    padding: 20px;
    background: $translucid-color;
    border-radius: 8px;
    max-width: 1200px;
    margin: 0 auto;
   }
 }
</style>
