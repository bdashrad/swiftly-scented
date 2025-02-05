<template>
  <div class="welcome">
    <h1>Welcome to Swiftly Scented!</h1>

    <WelcomeItem>
      <p>
        Can you guess whether the following phrases are Taylor Swift songs or Bath and Body Works
        scents?
      </p>
    </WelcomeItem>

    <router-link to="/game">
      <button>Let's Go!</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<style scoped>
.welcome {
  text-align: center;
  margin: 20px;
}

button {
  margin-top: 20px;
}
</style>
