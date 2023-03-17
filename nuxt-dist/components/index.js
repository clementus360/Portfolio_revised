export { default as About } from '../../components/About.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as Portfolio } from '../../components/Portfolio.vue'
export { default as Project } from '../../components/Project.vue'
export { default as Wave } from '../../components/Wave.vue'
export { default as Welcome } from '../../components/Welcome.vue'
export { default as UtilsScroller } from '../../components/utils/scroller.ts'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
