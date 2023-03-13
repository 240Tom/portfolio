<template>
  <div
    class="container"
    rel="stylesheet"
    href="/Users/athomas/portfolio/src/assets/fonts.css"
  >
    <header>
      <nav>
        <div class="logo">
          <img src="https://placehold.jp/x.png" />
        </div>

        <div class="menu">
          <ul class="menu-list">
            <li class="menu-list--item">Writings</li>
            <li class="menu-list--item">Projects</li>
            <li class="menu-list--item">Resume</li>
            <li class="menu-list--item">Contacts</li>
          </ul>
        </div>
      </nav>
    </header>

    <div></div>

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
        <h2>I make things for the internet.</h2>

        <p class="more-accurately">
          More accurately, I get other people to do it because I’m a really busy
          guy and so are you!
        </p>

        <button>Let's chat</button>
      </section>

      <section class="section-one">
        <h3>Featured Projects</h3>
        <article>
          <div class="featured-image"><img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              /></div>
          <div class="description"></div>
        </article>

        <article>
          <div class="featured-image"><img
                src="https://placehold.jp/800x600.png"
                alt="Elephant at sunset"
              /></div>
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
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

//RESET Stuff up top, don't touch //

header {
  height: 300px;
}

body {
  background-color: #000235;
}

.container {
  color: #ffff;
  font-family: "Inter", sans-serif;
  //max-width: 1080px;

  @media only screen and (min-width: 400px) and (max-width: 1024px) {
    //margin: 0px;
    width: 100%;
    border: 3px solid blue;
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
 
    
    
  }
  @media only screen and (min-width: 1025px) {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    

  }
}

.logo {
  width: 528px;
  height: 23px;
  margin-top: 83px;
  margin-left: 185px;
}

.menu {
  //width: 1070px;
  //height: 23px;
}

.menu-list {
  width: 617px;
  height: 23px;
  margin-top: 83 px;
  margin-left: 638px;
}

.section-zero{
  font-size: 24px;
  font-weight: 400px;
  
  //width: 684px;
  //height: 525px;
  //margin-top: 246px;
  //margin-left: 389px;
}

#firstsentence{
  padding-bottom: 55px;
  font-weight: 400;
}

.yes-i {
  font-size: 24px;
  width: 705px;
  height: 586px;
  margin-top: 246px;
  margin-left: 389px;
}

.that {
  font-style: italic;
}

#first-last {
  padding-bottom: 55px;
}

.first-name {
  font-size: 64px;
  margin-top: 246px;
  margin-left: 389px;
}

.last-name {
  font-size: 64px;
  color: rgb(197, 171, 38);
}

h2 {
  color: rgb(139, 135, 135);
  font-size: 24px;
  margin-left: 389px;
  padding-bottom: 55px;
  width: 684px;
}

.more-accurately {
  font-size: 32px;
  font-weight: 400px;
  margin-left: 389px;
  width: 511.3px;
  height: 143.26px;
}

.section-one{
  
}
</style>
<script lang="ts" setup>
// meta
definePageMeta({
  layout: "default",
});
</script>
