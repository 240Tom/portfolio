<template>
  <article class="featured-writings__article">
    <figure>
      <img
        src="~/assets/GreenFrog.png"
        :alt=caption
        class="featured-writings__image"
      />
      <figcaption class="featured-writings__caption">
        {{ caption }}
      </figcaption>
    </figure>
  </article>
</template>
<style lang="scss"></style>
<script lang="ts" setup>

//added javascripts 

const props = defineProps({ //Input parameters for a view components, slot and prop. 
  image: {
    type: String,
    // default: "text",
    required: false,
  },
  caption: {
    type: String,
    required: true,
  },
});


</script>
