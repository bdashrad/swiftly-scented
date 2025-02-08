<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.webp" width="125" height="125" />

    <div class="wrapper">
      <h1>Swiftly Scented</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/game">Play</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  margin: auto;
  padding: 0 1rem;
}

.logo {
  display: block;
  margin: 1rem auto;
  border-radius: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  margin: auto;
  margin-top: 2rem;
}

nav a {
  margin: 0 10px;
  color: var(--vt-c-light-blue);
  font-weight: bold;
}

nav a:hover {
  color: var(--color-accent);
}

.wrapper {
  background-color: var(--vt-c-light-yellow);
  padding: 1rem;
  border-radius: 10px;
}

.wrapper h1 {
  margin: auto;
  font-size: 2rem;
  color: var(--vt-c-light-blue);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 1px var(--vt-c-light-purple);
}

main {
  padding: 2rem;
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 1rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
