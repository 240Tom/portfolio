<template>
  <div class="container" rel="stylesheet">
    <TheHeader />

    <main>
      <Introduction />

      <FeaturedProjects />

      <FeaturedWritings />
    </main>
  </div>
</template>

<style lang="scss">
@import "/assets/body.scss";
@import "/assets/fonts.scss";
@import "/assets/reset.scss";
</style>

<script lang="ts" setup>
// meta
definePageMeta({
  layout: "default",
});
</script>
