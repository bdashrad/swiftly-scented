<template>
  <div class="game-view">
    <h1>Swiftly Scented</h1>
    <div v-if="currentPhrase">
      <p>{{ currentPhrase }}</p>
      <button @click="vote('taylorSwiftSong')">Taylor Swift Song</button>
      <button @click="vote('bathAndBodyWorksScent')">Bath and Body Works Scent</button>
    </div>
    <div v-else>
      <p>Game Over! Your score: {{ state.score }}</p>
      <button @click="restartGame">Play Again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { phrases } from '../data/phrases'
import { state } from '../store/state'

const allPhrases = [...phrases.taylorSwiftSongs, ...phrases.bathAndBodyWorksScents]
const currentPhrase = ref<string | null>(null)
const usedPhrases = ref<Set<string>>(new Set())

const getRandomPhrase = () => {
  if (usedPhrases.value.size === allPhrases.length) {
    return null // No more phrases left
  }
  let phrase: string
  do {
    phrase = allPhrases[Math.floor(Math.random() * allPhrases.length)]
  } while (usedPhrases.value.has(phrase))
  usedPhrases.value.add(phrase)
  return phrase
}

const vote = (type: 'taylorSwiftSong' | 'bathAndBodyWorksScent') => {
  if (
    (type === 'taylorSwiftSong' && phrases.taylorSwiftSongs.includes(currentPhrase.value!)) ||
    (type === 'bathAndBodyWorksScent' &&
      phrases.bathAndBodyWorksScents.includes(currentPhrase.value!))
  ) {
    state.score++
  }
  currentPhrase.value = getRandomPhrase()
}

const restartGame = () => {
  state.score = 0
  usedPhrases.value.clear()
  currentPhrase.value = getRandomPhrase()
}

// Initialize the game
currentPhrase.value = getRandomPhrase()
</script>

<style scoped>
.game-view {
  text-align: center;
  margin: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--color-primary);
  color: var(--color-text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darken(var(--color-primary), 10%);
}
</style>
