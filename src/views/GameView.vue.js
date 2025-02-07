import { ref } from 'vue'
import { phrases } from '../data/phrases'
import { state } from '../store/state'
const allPhrases = [...phrases.taylorSwiftSongs, ...phrases.bathAndBodyWorksScents]
const currentPhrase = ref(null)
const usedPhrases = ref(new Set())
const getRandomPhrase = () => {
  if (usedPhrases.value.size === allPhrases.length) {
    return null // No more phrases left
  }
  let phrase
  do {
    phrase = allPhrases[Math.floor(Math.random() * allPhrases.length)]
  } while (usedPhrases.value.has(phrase))
  usedPhrases.value.add(phrase)
  return phrase
}
const vote = (type) => {
  if (
    (type === 'taylorSwiftSong' && phrases.taylorSwiftSongs.includes(currentPhrase.value)) ||
    (type === 'bathAndBodyWorksScent' &&
      phrases.bathAndBodyWorksScents.includes(currentPhrase.value))
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
currentPhrase.value = getRandomPhrase() /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
  const __VLS_ctx = {}
  let __VLS_components
  let __VLS_directives
  // CSS variable injection
  // CSS variable injection end
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div,
  )({
    ...{ class: 'game-view' },
  })
  __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({})
  if (__VLS_ctx.currentPhrase) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({})
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
    __VLS_ctx.currentPhrase
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.button,
      __VLS_intrinsicElements.button,
    )({
      ...{
        onClick: (...[$event]) => {
          if (!__VLS_ctx.currentPhrase) return
          __VLS_ctx.vote('taylorSwiftSong')
        },
      },
    })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.button,
      __VLS_intrinsicElements.button,
    )({
      ...{
        onClick: (...[$event]) => {
          if (!__VLS_ctx.currentPhrase) return
          __VLS_ctx.vote('bathAndBodyWorksScent')
        },
      },
    })
  } else {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({})
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
    __VLS_ctx.state.score
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.button,
      __VLS_intrinsicElements.button,
    )({
      ...{ onClick: __VLS_ctx.restartGame },
    })
  }
  ;['game-view']
  var __VLS_slots
  var $slots
  let __VLS_inheritedAttrs
  var $attrs
  const __VLS_refs = {}
  var $refs
  var $el
  return {
    attrs: {},
    slots: __VLS_slots,
    refs: $refs,
    rootEl: $el,
  }
}
const __VLS_self = (await import('vue')).defineComponent({
  setup() {
    return {
      state: state,
      currentPhrase: currentPhrase,
      vote: vote,
      restartGame: restartGame,
    }
  },
})
export default (await import('vue')).defineComponent({
  setup() {
    return {}
  },
  __typeEl: {},
}) /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=GameView.vue.js.map
