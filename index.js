import * as icons from 'vue-feather-icons'

export default {
  install: function install(Vue, options) {
    try {
      for (var component in icons) {
        Vue.component(icons[component]['name'], icons[component]);
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
