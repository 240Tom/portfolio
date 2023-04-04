<template>
  <section class="section-zero">
    <div class="section-subzero">
      <h1>
        <div class="sentence-one">
          <span class="text__small">Yes, I’m that</span>
        </div>

        <div id="sentence-two">
          <span class="text__large"
            >Luke <span class="text__large--highlight">Weston.</span></span
          >
        </div>
      </h1>
    </div>
    <h2 class="text__medium">I make things for the internet.</h2>

    <p class="cta">
      More accurately, I get other people to do it because I’m a really busy guy
      and so are you!
      <button class="button">LET'S CHAT</button>
    </p>
  </section>
</template>
<style lang="scss">
.section-zero {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  gap: 5em;
  padding-bottom: 150px;

  & > * {
    flex: 1 1 100%;
  }
}

.sentence-one {
  width: 150px;
  padding-bottom: 50px;
}

.text {
  font-size: 24px;
  font-weight: 400;
  &__small {
    font-size: 24px;
  }
  &__medium {
    font-size: 44px;
    color: #8b8787;
  }
  &__large {
    font-size: 64px;
    &--highlight {
      color: rgb(197, 171, 38);
    }
  }
}

.cta {
  font-size: 32px;
  width: 511.3px;
  height: 143.26px;
}

.button {
  background-color: #7a7cff;
  font-size: 14px;
  width: 162px;
  height: 41.93px;
  margin-top: 41px;
  color: white;
  border-radius: 4px;
}
</style>
<script lang="ts" setup></script>
