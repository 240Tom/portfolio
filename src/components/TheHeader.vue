<template>
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
</template>
<style>
.header {
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.logo {
  flex-grow: 1;
  margin-right: auto;
  flex: 1 1 30%;
}

.nav {
  margin-left: auto;
  flex-grow: 1;
  flex: 1 1 70%;
}
</style>
<script lang="ts" setup></script>
