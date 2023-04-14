<template>
  <section>
    <h3 class="section-two">Featured Writings</h3>

    <div class="featured-writings">
      <FeaturedWriting :caption="writing.name" v-for="writing in writings" />
    </div>
  </section>
</template>

<style lang="scss">
.featured-writings {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;

  &__article {
    box-sizing: border-box;
    display: table;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 20%;

    @media (max-width: 399px) {
      flex-basis: 30%;
    }

    @media (min-width: 400px) and (max-width: 767px) {
      flex-basis: 50%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      flex-basis: 33%;
    }

    @media only screen and (min-width: 1024px) {
      flex-basis: 25%;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__caption {
  }
}

.section-two {
  text-align: center;
  font-size: 36px;
  padding-bottom: 16px;
  padding-top: 16px;
}
</style>

<script lang="ts" setup>
import { sanitizeFilePath } from "mlly";
import { text } from "stream/consumers";
import { tagWeight } from "unhead";

 
 const response = await fetch('http://localhost:3001/writings');
  const writings = await response.json();

 
//   { caption: "imageone" },
//   { caption: "imagetwo" },
//   { caption: "imagethree" },
//   { caption: "imagefour" },
//   { caption: "imagefive" },
//   { caption: "imagesix" },
// ];

// let ball={
//   color
//   text
//   weight
//   size
//   bounciness
// }

// let car={
//   type
//   numberofseats
//   make
//   year


</script>
