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
          <div class="firstsentence">
            <span class="yes-i">Yes,I’m</span>
            <span class="that"> that</span><br />
          </div>

          <div id="first-last">
            <span class="first-name">Luke</span>
            <span class="last-name">Weston.</span>
          </div>
        </h1>
        <h2 class="second-sentence">I make things for the internet.</h2>

        <p class="more-accurately">
          More accurately, I get other people to do it because I’m a really busy
          guy and so are you!
        </p>

        <button class="button">Let's chat</button>
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
@import "/assets/body.css";
@import "/assets/fonts.css";
@import "/assets/reset.css";



.container {
  color: #ffff;
  font-family: "Inter", sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;

  //max-width: 1080px;

  @media only screen and (min-width: 400px) and (max-width: 1024px) {
    //margin: 0px;
    width: 100%;
    border: 3px solid red;
  }
  @media only screen and (min-width: 1025px) {
    margin: auto;
    width: 50%;
    border: 3px solid green;
  }
}

.menu-list {
  list-style: none;

  &__item {
    display: inline;
    padding: 0px 10px;
  }
}
</style>

<script lang="ts" setup>
// meta
definePageMeta({
  layout: "default",
});
</script>
