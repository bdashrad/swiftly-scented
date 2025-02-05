<template>
  <div>
    <p>
      Read each phrase and decide if it is the name of a Taylor Swift song or a Bath and Body Works
      scent.
    </p>
    <div class="phrase-box">
      <p>"{{ currentPhrase }}"</p>
    </div>
    <button @click="vote('taylorSwiftSong')">Taylor Swift Song</button>
    <button @click="vote('bathAndBodyWorksScent')">Bath and Body Works Scent</button>
    <p v-if="result !== null">{{ result }}</p>
    <p>Score: {{ score }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { phrases } from '../data/phrases'

export default defineComponent({
  name: 'GameComponent',
  setup() {
    const currentPhrase = ref('')
    const result = ref<string | null>(null)
    const score = ref(0)

    const getRandomPhrase = () => {
      const allPhrases = [...phrases.taylorSwiftSongs, ...phrases.bathAndBodyWorksScents]
      return allPhrases[Math.floor(Math.random() * allPhrases.length)]
    }

    const vote = (type: 'taylorSwiftSong' | 'bathAndBodyWorksScent') => {
      if (
        (type === 'taylorSwiftSong' && phrases.taylorSwiftSongs.includes(currentPhrase.value)) ||
        (type === 'bathAndBodyWorksScent' &&
          phrases.bathAndBodyWorksScents.includes(currentPhrase.value))
      ) {
        result.value = 'Correct!'
        score.value++
      } else {
        result.value = 'Incorrect!'
      }
      currentPhrase.value = getRandomPhrase()
    }

    currentPhrase.value = getRandomPhrase()

    return {
      currentPhrase,
      vote,
      result,
      score,
    }
  },
})
</script>

<style scoped>
.phrase-box {
  background-color: var(--vt-c-light-peach);
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-text);
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: var(--vt-c-white);
  border: none;
  border-radius: 12px; /* Rounded border */
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 20%;
}
</style>
