<template>
  <div class="game">
    <p>
      Read each phrase and decide if it is the name of a Taylor Swift song or a Bath and Body Works
      scent.
    </p>
    <div class="phrase-box" v-if="gameOver === false">
      <h2>"{{ currentPhrase }}"</h2>

      <button @click="vote('taylorSwiftSong')">Song</button>
      <button @click="vote('bathAndBodyWorksScent')">Scent</button>
    </div>

    <div class="score-box" v-if="result !== null">
      <p>
        {{ result }} You've guessed {{ score.countCorrect }} out of
        {{ score.countAttempts }} correctly!
      </p>
      <p>Score: {{ parseFloat(score.percentCorrect.toFixed(2)) }}%</p>
      <div v-if="result !== null"><button @click="restartGame" class="restart">Reset</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { phrases } from '../data/phrases'
import { useScoreStore } from '../stores/score'

export default defineComponent({
  name: 'GameComponent',
  setup() {
    const allPhrases = [...phrases.taylorSwiftSongs, ...phrases.bathAndBodyWorksScents]
    const currentPhrase = ref<string>('')
    const usedPhrases = ref<Set<string>>(new Set())
    const result = ref<string | null>(null)
    const score = useScoreStore()
    const gameOver = ref<boolean>(false)

    const getRandomPhrase = () => {
      if (usedPhrases.value.size === allPhrases.length) {
        result.value = 'Game Over!'
        gameOver.value = true
        return '' // No more phrases left
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
        (type === 'taylorSwiftSong' && phrases.taylorSwiftSongs.includes(currentPhrase.value)) ||
        (type === 'bathAndBodyWorksScent' &&
          phrases.bathAndBodyWorksScents.includes(currentPhrase.value))
      ) {
        result.value = 'Correct!'
        score.increment()
      } else {
        result.value = 'Incorrect!'
      }
      score.incrementAttempts()
      currentPhrase.value = getRandomPhrase()
    }

    currentPhrase.value = getRandomPhrase()

    const restartGame = () => {
      score.$reset()
      usedPhrases.value.clear()
      result.value = null
      currentPhrase.value = getRandomPhrase()
    }

    return {
      currentPhrase,
      vote,
      result,
      score,
      restartGame,
      gameOver,
    }
  },
})
</script>

<style scoped>
.game {
  text-align: center;
  margin: 20px;
}

.phrase-box {
  background-color: var(--vt-c-light-blue);
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-text);
  text-align: center;
}

.phrase-box h2 {
  color: var(--vt-c-white);
}

.score-box {
  background-color: var(--vt-c-light-purple);
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-text);
  text-align: center;
}

button {
  background-color: var(--vt-c-light-pink);
  margin: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  width: 50%;
  color: var(--vt-c-white);
  text-shadow: 1px 1px 1px var(--vt-c-light-purple);
}

button:hover {
  background-color: var(--vt-c-light-purple);
  color: var(--vt-c-light-peach);
}

button.restart:hover {
  background-color: var(--vt-c-light-blue);
}
</style>
