import { defineComponent, ref } from 'vue'
import { phrases } from '../data/phrases'
export default defineComponent({
  name: 'GameComponent',
  setup() {
    const currentPhrase = ref('')
    const result = ref(null)
    const score = ref(0)
    const getRandomPhrase = () => {
      const allPhrases = [...phrases.taylorSwiftSongs, ...phrases.bathAndBodyWorksScents]
      return allPhrases[Math.floor(Math.random() * allPhrases.length)]
    }
    const vote = (type) => {
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
}) /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
  const __VLS_ctx = {}
  let __VLS_components
  let __VLS_directives
  // CSS variable injection
  // CSS variable injection end
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({})
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div,
  )({
    ...{ class: 'phrase-box' },
  })
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_ctx.currentPhrase
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button,
  )({
    ...{
      onClick: (...[$event]) => {
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
        __VLS_ctx.vote('bathAndBodyWorksScent')
      },
    },
  })
  if (__VLS_ctx.result !== null) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
    __VLS_ctx.result
  }
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_ctx.score
  ;['phrase-box']
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
let __VLS_self
//# sourceMappingURL=Game.vue.js.map
