<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>
<template>
  <main>
    <WelcomeItem>
      <template #heading>Welcome to Swiftly Scented!</template>

      Do you like Bath and Body Works? Love Taylor Swift? Have you been looking for a unique
      opportunity to showcase your knowledge of both?
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>What am I doing here?</template>

      Can you guess whether the following phrases are Taylor Swift songs or Bath and Body Works
      scents?
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Why did you build this?</template>

      I wanted to play with generative ai, using it to write something in a language I didn't know.
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Can I just play the game?</template>

      <RouterLink to="/game">
        <button>Yes! Click here!</button>
      </RouterLink>
    </WelcomeItem>
  </main>
</template>

<style scoped>
main {
  max-width: 730px;
  flex-direction: column;
  align-items: center;
}
</style>
