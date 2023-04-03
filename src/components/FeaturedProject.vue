<template>
  <article class="featured-projects__article">
    <figure class="featured-projects__figure">
      <img
        src="~/assets/PXL_20220303_153759308_2(1).jpg"
        alt="Houses on an island in Belize"
        :class=classNameimages 
      />
      <figcaption :class=classNamecaptions >
        Houses on an island in Belize
      </figcaption>
    </figure>
  </article>
</template>

<style lang="scss"></style>

<script lang="ts" setup>

import { ref, computed } from "vue";

const props = defineProps({
  orderreverse: {
    type: Boolean,
    default: false,
    required: false,
  },
 
});

const classNameimages = computed(() => {
      return props.orderreverse==true ? "featured-projects__image--order-reverse" :"featured-projects__image";
    });
    const classNamecaptions = computed(() => {
      return props.orderreverse==true ? "featured-projects__caption--order-reverse" :"featured-projects__caption";
    });



</script>
