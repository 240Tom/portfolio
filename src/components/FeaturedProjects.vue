<template>
  <section>
    <h3 class="section-one">Featured Projects</h3>

    <div class="featured-projects">
      <FeaturedProject />

      <FeaturedProject reverse="true" />
    </div>
  </section>
</template>
<script lang="ts" setup></script>

<style>
.featured-projects {
  

  &__article {
    
    
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

  &__figure {
    display: flex;
    gap: 10px;
    padding: 0px 0px 15px 0px ;

    
  }

  &__image {
    flex-basis: 33.33%;
    min-width: 66.66%;
    order: 1;
    &--order-reverse{
      order:2;
      flex-basis: 33.33%;
    min-width: 66.66%;
    }
  }

  &__caption {
    display: block;
    justify-content: center;
    background: #dbb1b1;
    padding: 5px;
    width: 33.33%; 
    min-height: 80px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    order: 2;
    &--order-reverse{
      order:1;
      display: block;
    justify-content: center;
    background: #dbb1b1;
    padding: 5px;
    width: 33.33%; 
    min-height: 80px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    }
 
  }

  

}

</style>