<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <router-link to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.webp" width="125" height="125" />
    </router-link>
    <div class="wrapper">
      <h1>Swiftly Scented</h1>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
:root {
  --color-background: #1c1c1c; /* Darker background */
  --color-primary: #e74c3c; /* Red */
  --color-secondary: #2c3e50; /* Dark blue */
  --color-accent: #3498db; /* Blue */
  --color-text: #ecf0f1; /* Light text */
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  color: white;
  padding: 1rem;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  background-color: var(--vt-c-light-yellow);
  padding: 1rem;
  border-radius: 10px;
}

main {
  padding: 2rem;
  text-align: center;
}
</style>
