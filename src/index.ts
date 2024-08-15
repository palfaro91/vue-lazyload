import Lazy from './lazy'
import LazyComponent from './lazy-component'
import LazyContainer from './lazy-container'
import LazyImage from './lazy-image'
import { VueLazyloadOptions } from '../types/lazyload'
import { App } from 'vue'

export default {
  /*
  * install function
  * @param  {Vue} Vue
  * @param  {object} options lazyload options
  */
  install (Vue: App, options: VueLazyloadOptions = {}) {
    const lazy = new Lazy(options)
    const lazyContainer = new LazyContainer(lazy)
    const vueVersion = Number(Vue.version.split('.')[0])
    if (vueVersion < 3) return new Error('Vue version at least 3.0')
    if (options.debug) {
      console.log('will install vue-lazyload')
    }
    Vue.config.globalProperties.$Lazyload = lazy
    if (options.debug) {
      console.log('added $Lazyload to globalProperties')
    }

    Vue.provide('Lazyload', lazy)
    if (options.debug) {
      console.log('Vue.provide("Lazyload", lazy) set')
    }

    if (options.lazyComponent) {
      Vue.component('lazy-component', LazyComponent(lazy))
      if (options.debug) {
        console.log('Did install lazy-component component')
      }
    }

    if (options.lazyImage) {
      Vue.component('lazy-image', LazyImage(lazy))
      if (options.debug) {
        console.log('Did install lazy-image component')
      }
    }

    if (options.debug){
      console.log('Will add lazy directive')
    }

    Vue.directive('lazy', {
      beforeMount: lazy.add.bind(lazy),
      beforeUpdate: lazy.update.bind(lazy),
      updated: lazy.lazyLoadHandler.bind(lazy),
      unmounted: lazy.remove.bind(lazy),
      getSSRProps(binding, vnode) {
          return {}
      },
    })
    if (options.debug) {
      console.log('did install lazy directive')
    }
    if (options.debug) {
      console.log('will install lazy-container directive')
    }
    Vue.directive('lazy-container', {
      beforeMount: lazyContainer.bind.bind(lazyContainer),
      updated: lazyContainer.update.bind(lazyContainer),
      unmounted: lazyContainer.unbind.bind(lazyContainer),
      getSSRProps(binding, vnode) {
        return {}
      },
    })
    if (options.debug) {
      console.log('did install lazy-container directive')
    }
  }
}
