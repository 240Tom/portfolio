<template>
  <article class="featured-projects__article">
    <figure class="featured-projects__figure">
      <img
        src="~/assets/PXL_20220303_153759308_2(1).jpg"
        alt="Houses on an island in Belize"
        :class="classNameimages"
      />
      <figcaption :class="classNamecaptions"></figcaption>
    </figure>
  </article>
</template>

<style lang="scss"></style>

<script lang="ts" setup>
import { ref, computed } from "vue"; //Computed - always know what the value is

const props = defineProps({
  //props - how we accepts input into a component.
  orderreverse: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const classNameimages = computed(() => {
  return props.orderreverse == true
    ? "featured-projects__image--order-reverse"
    : "featured-projects__image";
});
const classNamecaptions = computed(() => {
  return props.orderreverse == true
    ? "featured-projects__caption--order-reverse"
    : "featured-projects__caption";
});

//Composition api -
</script>
