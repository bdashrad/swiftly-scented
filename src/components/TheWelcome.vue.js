import WelcomeItem from './WelcomeItem.vue' /* PartiallyEnd: #3632/scriptSetup.vue */
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
    ...{ class: 'welcome' },
  })
  __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({})
  // @ts-ignore
  /** @type { [typeof WelcomeItem, typeof WelcomeItem, ] } */ // @ts-ignore
  const __VLS_0 = __VLS_asFunctionalComponent(WelcomeItem, new WelcomeItem({}))
  const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0))
  __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
  __VLS_4.slots.default
  var __VLS_4
  const __VLS_5 = {}.RouterLink
  /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ // @ts-ignore
  const __VLS_6 = __VLS_asFunctionalComponent(
    __VLS_5,
    new __VLS_5({
      to: '/game',
    }),
  )
  const __VLS_7 = __VLS_6(
    {
      to: '/game',
    },
    ...__VLS_functionalComponentArgsRest(__VLS_6),
  )
  __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({})
  __VLS_10.slots.default
  var __VLS_10
  ;['welcome']
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
      WelcomeItem: WelcomeItem,
    }
  },
})
export default (await import('vue')).defineComponent({
  setup() {
    return {}
  },
  __typeEl: {},
}) /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TheWelcome.vue.js.map
