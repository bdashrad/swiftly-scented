<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
</script>
<template>
  <div class="about">
    <WelcomeItem>
      <template #heading>About Taylor Scents</template>

      Taylor Scents is a fun and interactive project that challenges you to guess whether a phrase
      is a Taylor Swift song or a Bath and Body Works scent.
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Inspiration</template>

      I was inspired by a joke I saw online, where players had to guess whether a phrase was a Taylor Swift song or a Bath and Body Works scent, and
      I thought it would be fun to create a web app version of the game.

    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Why did you build this?</template>

      I wanted to play with generative ai, using it to write something in a language I didn't know well, using frameworks and libraries I had no experience with.
      I built the initial version in an evening using Github Copilot while watching TV, and have since made a few refinements.
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Learnings</template>

      Generative AI has come a long way, and is very powerful. I was able to build a basic working app on a modern framework with nearly zero code, solely by requesting Copilot chat to make changes in VS Code.
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    max-width: 730px;
    min-height: 100vh;
    align-items: center;
    /*    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px; */
  }
}

.about p {
  margin: 10px 0;
  max-width: 600px;
}
</style>
