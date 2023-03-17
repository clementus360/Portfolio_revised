export const About = () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Contact = () => import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const Portfolio = () => import('../../components/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const Project = () => import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c))
export const Wave = () => import('../../components/Wave.vue' /* webpackChunkName: "components/wave" */).then(c => wrapFunctional(c.default || c))
export const Welcome = () => import('../../components/Welcome.vue' /* webpackChunkName: "components/welcome" */).then(c => wrapFunctional(c.default || c))
export const UtilsScroller = () => import('../../components/utils/scroller.ts' /* webpackChunkName: "components/utils-scroller" */).then(c => wrapFunctional(c.default || c))

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
