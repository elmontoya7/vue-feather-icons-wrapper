import * as icons from 'vue-feather-icons'

export default {
  install(Vue, options) {
    try {
      for (let component in icons) {
        Vue.component(icons[component]['name'], icons[component])
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
