import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#d0d0d0",
    secondary: "#444244",
    accent: "#eda1ed",
    error: "#e06b6b",
    info: "#8aabd8",
    success: "#68c168",
    warning: "#e0d479"
  }
})
