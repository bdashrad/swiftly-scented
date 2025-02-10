import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  const countAttempts = ref(0)
  const countCorrect = ref(0)
  const percentCorrect = computed(() =>
    countAttempts.value === 0 ? 0 : (countCorrect.value * 100) / countAttempts.value,
  )

  function incrementAttempts() {
    countAttempts.value++
  }

  function increment() {
    countCorrect.value++
  }

  function $reset() {
    countAttempts.value = 0
    countCorrect.value = 0
  }

  return {
    countAttempts,
    countCorrect,
    percentCorrect,
    incrementAttempts,
    increment,
    $reset,
  }
})
