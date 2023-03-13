<template>
  <div class="container" rel="stylesheet">
    <header class="header">
      <img class="logo" src="https://placehold.jp/x.png" />

      <nav class="nav">
        <ul class="menu-list">
          <li class="menu-list__item">Writings</li>
          <li class="menu-list__item">Projects</li>
          <li class="menu-list__item">Resume</li>
          <li class="menu-list__item">Contacts</li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="section-zero">
        <h1>
          <div class="sentence-one">
            <span class="text__small">Yes,I’m that</span>
          </div>

          <div id="sentence-two">
            <span class="text__large">Luke Weston</span>
         
          </div>
        </h1>
        <h2 class="text__medium">I make things for the internet.</h2>

        <p class="cta">
          More accurately, I get other people to do it because I’m a really busy
          guy and so are you!
          <button class="button">Let's chat</button>
        </p>

        
      </section>

      <section class="section-one">
        <h3>Featured Projects</h3>
        <article>
          <div class="featured-image">
            <img
              src="https://placehold.jp/800x600.png"
              alt="Elephant at sunset"
            />
          </div>
          <div class="description"></div>
        </article>

        <article>
          <div class="featured-image">
            <img
              src="https://placehold.jp/800x600.png"
              alt="Elephant at sunset"
            />
          </div>
          <div class="description"></div>
        </article>
      </section>

      <section class="section-two">
        <h3>Featured Writings</h3>
        <div>
          <article>
            <figure>
              <img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              />
              <figcaption>An elephant at sunset</figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              />
              <figcaption>An elephant at sunset</figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              />
              <figcaption>An elephant at sunset</figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              />
              <figcaption>An elephant at sunset</figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              />
              <figcaption>An elephant at sunset</figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              />
              <figcaption>An elephant at sunset</figcaption>
            </figure>
          </article>
        </div>
      </section>
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
